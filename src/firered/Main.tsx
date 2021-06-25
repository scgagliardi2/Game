export interface Main
{
    /*0x000*/ callback1: () => any
    /*0x004*/ callback2: () => any

    /*0x008*/ savedCallback: () => any

    /*0x00C*/ vblankCallback: () => any
    /*0x010*/ hblankCallback: () => any
    /*0x014*/ vcountCallback: () => any
    /*0x018*/ serialCallback: () => any

    /*0x01C*/ intrCheck: any

    /*0x020*/ vblankCounter1: number
    /*0x024*/ vblankCounter2: number

    /*0x028*/ heldKeysRaw: number           // held keys without L=A remapping
    /*0x02A*/ newKeysRaw: number            // newly pressed keys without L=A remapping
    /*0x02C*/ heldKeys: number              // held keys with L=A remapping
    /*0x02E*/ newKeys: number               // newly pressed keys with L=A remapping
    /*0x030*/ newAndRepeatedKeys: number    // newly pressed keys plus key repeat
    /*0x032*/ keyRepeatCounter: number      // counts down to 0, triggering key repeat
    /*0x034*/ watchedKeysPressed: boolean // whether one of the watched keys was pressed
    /*0x036*/ watchedKeysMask: number       // bit mask for watched keys

    /*0x038*/ oamBuffer: OamData[] // 128

    /*0x438*/ state: number

    /*0x439*/ oamLoadDisabled: number | 1;
    /*0x439*/ inBattle: number | 1;
    /*0x439*/ field_439_x4: number | 1;
};

export let Main: Main