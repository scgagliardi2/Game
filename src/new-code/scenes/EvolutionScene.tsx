import { SPECIES } from "../pokemon/data/Species";
import { Pokemon } from "../pokemon/IPokemon";

export function EvolutionScene(mon: Pokemon, speciesToEvolve: SPECIES, canStopEvo: number, partyId: number) {
    u8 name[20];
    u16 currSpecies;
    u32 trainerId, personality;
    const struct CompressedSpritePalette* pokePal;
    u8 id;

    SetHBlankCallback(NULL);
    SetVBlankCallback(NULL);
    CpuFill32(0, (void*)(VRAM), VRAM_SIZE);

    SetGpuReg(REG_OFFSET_MOSAIC, 0);
    SetGpuReg(REG_OFFSET_WIN0H, 0);
    SetGpuReg(REG_OFFSET_WIN0V, 0);
    SetGpuReg(REG_OFFSET_WIN1H, 0);
    SetGpuReg(REG_OFFSET_WIN1V, 0);
    SetGpuReg(REG_OFFSET_WININ, 0);
    SetGpuReg(REG_OFFSET_WINOUT, 0);

    ResetPaletteFade();

    gBattle_BG0_X = 0;
    gBattle_BG0_Y = 0;
    gBattle_BG1_X = 0;
    gBattle_BG1_Y = 0;
    gBattle_BG2_X = 0;
    gBattle_BG2_Y = 0;
    gBattle_BG3_X = 256;
    gBattle_BG3_Y = 0;

    gBattleTerrain = BATTLE_TERRAIN_PLAIN;

    InitBattleBgsVideo();
    LoadBattleTextboxAndBackground();
    ResetSpriteData();
    ScanlineEffect_Stop();
    ResetTasks();
    FreeAllSpritePalettes();

    gReservedSpritePaletteCount = 4;

    sEvoStructPtr = AllocZeroed(sizeof(struct EvoInfo));
    AllocateMonSpritesGfx();

    GetMonData(mon, MON_DATA_NICKNAME, name);
    StringCopy10(gStringVar1, name);
    StringCopy(gStringVar2, gSpeciesNames[speciesToEvolve]);

    // preEvo sprite
    currSpecies = GetMonData(mon, MON_DATA_SPECIES);
    trainerId = GetMonData(mon, MON_DATA_OT_ID);
    personality = GetMonData(mon, MON_DATA_PERSONALITY);
    DecompressPicFromTable(&gMonFrontPicTable[currSpecies],
                             gMonSpritesGfxPtr->sprites[1],
                             currSpecies);
    pokePal = GetMonSpritePalStructFromOtIdPersonality(currSpecies, trainerId, personality);
    LoadCompressedPalette(pokePal->data, 0x110, 0x20);

    SetMultiuseSpriteTemplateToPokemon(currSpecies, 1);
    gMultiuseSpriteTemplate.affineAnims = gDummySpriteAffineAnimTable;
    sEvoStructPtr->preEvoSpriteId = id = CreateSprite(&gMultiuseSpriteTemplate, 120, 64, 30);

    gSprites[id].callback = SpriteCallbackDummy2;
    gSprites[id].oam.paletteNum = 1;
    gSprites[id].invisible = TRUE;

    // postEvo sprite
    DecompressPicFromTable(&gMonFrontPicTable[speciesToEvolve],
                             gMonSpritesGfxPtr->sprites[3],
                             speciesToEvolve);
    pokePal = GetMonSpritePalStructFromOtIdPersonality(speciesToEvolve, trainerId, personality);
    LoadCompressedPalette(pokePal->data, 0x120, 0x20);

    SetMultiuseSpriteTemplateToPokemon(speciesToEvolve, 3);
    gMultiuseSpriteTemplate.affineAnims = gDummySpriteAffineAnimTable;
    sEvoStructPtr->postEvoSpriteId = id = CreateSprite(&gMultiuseSpriteTemplate, 120, 64, 30);
    gSprites[id].callback = SpriteCallbackDummy2;
    gSprites[id].oam.paletteNum = 2;
    gSprites[id].invisible = TRUE;

    LoadEvoSparkleSpriteAndPal();

    sEvoStructPtr->evoTaskId = id = CreateTask(Task_EvolutionScene, 0);
    gTasks[id].tState = 0;
    gTasks[id].tPreEvoSpecies = currSpecies;
    gTasks[id].tPostEvoSpecies = speciesToEvolve;
    gTasks[id].tCanStop = canStopEvo;
    gTasks[id].tLearnsFirstMove = TRUE;
    gTasks[id].tEvoWasStopped = FALSE;
    gTasks[id].tPartyId = partyId;

    memcpy(&sEvoStructPtr->savedPalette, &gPlttBufferUnfaded[0x20], 0x60);

    SetGpuReg(REG_OFFSET_DISPCNT, DISPCNT_OBJ_ON | DISPCNT_BG_ALL_ON | DISPCNT_OBJ_1D_MAP);

    SetHBlankCallback(EvoDummyFunc);
    SetVBlankCallback(VBlankCB_EvolutionScene);
    m4aMPlayAllStop();
    HelpSystem_Disable();
    SetMainCallback2(CB2_EvolutionSceneUpdate);
}
