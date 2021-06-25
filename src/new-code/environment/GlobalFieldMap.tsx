export interface Tileset {
    /*0x00*/ isCompressed: boolean
    /*0x01*/ isSecondary: boolean
    /*0x04*/ tiles: any
    /*0x08*/ palettes: any
    /*0x0c*/ metatiles: any
    /*0x10*/ callback: any // TilesetCB
    /*0x14*/ metatileAttributes: any
}

export interface MapLayout {
    /*0x00*/ width: number
    /*0x04*/ height: number
    /*0x08*/ border: number
    /*0x0c*/ map: number
    /*0x10*/ primaryTileset: Tileset
    /*0x14*/ secondaryTileset: Tileset
    /*0x18*/ borderWidth: number
    /*0x19*/ borderHeight: number
}

export interface BackupMapLayout {
    Xsize: number
    Ysize: number
    map: number
}

export interface ObjectEventTemplate {
    /*0x00*/ localId: number
    /*0x01*/ graphicsId: number
    /*0x02*/ inConnection: number
    /*0x04*/ x: number
    /*0x06*/ y: number
    /*0x08*/ elevation: number
    /*0x09*/ movementType: number
    /*0x0A*/ movementRangeX: number | 4
             movementRangeY: number | 4
    /*0x0C*/ trainerType: number
    /*0x0E*/ trainerRange_berryTreeId: number
    /*0x10*/ script: any
    /*0x14*/ flagId: number
}  /*size = 0x18*/

export interface WarpEvent {
    x: number
    y: number
    elevation: number
    warpId: number
    mapNum: number
    mapGroup: number
}

export interface CoordEvent {
    x: number
    y: number
    elevation: number
    trigger: number
    index: number
    script: number
}

export interface BgEvent {
    x: number
    y: number
    elevation: number
    kind: number // The "kind" field determines how to access bgUnion union below.
    bgUnion: {
        script: number
        hiddenItemStr: {
             itemId: number | 16
             hiddenItemId: number | 8 // flag offset to determine flag lookup
             quantity: number | 7
             isUnderfoot: number | 1
        }
        hiddenItem: number
        secretBaseId: number
    }
}

export interface MapEvents {
    objectEventCount: number
    warpCount: number
    coordEventCount: number
    bgEventCount: number

    objectEvents: ObjectEventTemplate
    warps: WarpEvent
    coordEvents: CoordEvent
    bgEvents: BgEvent
}

export interface MapConnection {
 /*0x00*/ direction: number
 /*0x04*/ offset: number
 /*0x08*/ mapGroup: number
 /*0x09*/ mapNum: number
}

export interface MapConnections {
    count: number
    connections: MapConnection
}

export interface MapHeader {
    /* 0x00 */ mapLayout: MapLayout
    /* 0x04 */ events: MapEvents
    /* 0x08 */ mapScripts: number
    /* 0x0C */ connections: MapConnections
    /* 0x10 */ music: number
    /* 0x12 */ mapLayoutId: number
    /* 0x14 */ regionMapSectionId: number
    /* 0x15 */ cave: number
    /* 0x16 */ weather: number
    /* 0x17 */ mapType: number
    /* 0x18 */ bikingAllowed: boolean
    /* 0x19 */ flags: number
    /* 0x1A */ floorNum: number
    /* 0x1B */ battleType: number
};