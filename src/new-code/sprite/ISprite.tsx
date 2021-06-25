export interface Sprite {
    oam: OamData, 
    anims: AnimCmd, 
    images: SpriteFrameImage, 
    affineAnims: AffineAnimCmd, 
    template: SpriteTemplate, 
    subspriteTables: SubspriteTable, 
    callback: SpriteCallback, 
    
    pos1: Coords16, 
    pos2: Coords16, 
    centerToCornerVecX: number, 
    centerToCornerVecY: number, 
    
    animNum: number, 
    animCmdIndex: number, 
    animDelayCounter: number | 6, 
    animPaused: number | 1, 
    affineAnimPaused: number | 1, 
    animLoopCounter: number, 
    
        // general purpose data fields
    data: number[], 
    
    inUse: number | 1,                //1
    coordOffsetEnabled: number | 1,   //2
    invisible: number | 1,            //4
    flags_3: number | 1,              //8
    flags_4: number | 1,              //0x10
    flags_5: number | 1,              //0x20
    flags_6: number | 1,              //0x40
    flags_7: number | 1,              //0x80
    hFlip: number | 1,                //1
    vFlip: number | 1,                //2
    animBeginning: number | 1,        //4
    affineAnimBeginning: number | 1,  //8
    animEnded: number | 1,            //0x10
    affineAnimEnded: number | 1,      //0x20
    usingSheet: number | 1,           //0x40
    flags_f: number | 1,              //0x80
    
    sheetTileStart: number, 
    
    subspriteTableNum: number | 6, 
    subspriteMode: number | 2, 
    
    subpriority: number, 
}
