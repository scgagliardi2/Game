import { QL_STATE_PLAYBACK } from "../data/QuestLogData";
import { QuestLogState } from "../questLog/QuestLog";
import { m4aSongNumStart } from "./M4A";
import { m4aMPlayFadeOut } from "./m4a/M4A";
import { MusicPlayerInfo } from "./m4a/M4AInternal";

export let DisableMapMusicChangeOnMapLoad: number;


export let CurrentMapMusic: number
export let NextMapMusic: number
export let MapMusicState: number
export let MapMusicFadeInSpeed: number
export let FanfareCounter: number

export let MPlayInfo_BGM: MusicPlayerInfo
export let MPlayInfo_SE1: MusicPlayerInfo
export let MPlayInfo_SE2: MusicPlayerInfo
export let MPlayInfo_SE3: MusicPlayerInfo

export function FadeOutMapMusic(speed: number) {
    if (IsNotWaitingForBGMStop())
        FadeOutBGM(speed);
    CurrentMapMusic = 0;
    NextMapMusic = 0;
    MapMusicState = 5;
}


export function IsNotWaitingForBGMStop(): boolean {
    if (MapMusicState == 6)
        return false;
    if (MapMusicState == 5)
        return false;
    if (MapMusicState == 7)
        return false;
    return true;
}

export function FadeOutBGM(speed: number) {
    m4aMPlayFadeOut(MPlayInfo_BGM, speed);
}


export function PlaySE(songNum: number) {
    if(DisableMapMusicChangeOnMapLoad == 0 && QuestLogState != QL_STATE_PLAYBACK)
        m4aSongNumStart(songNum);
}