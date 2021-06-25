
export const ID_NUMBER = 0x68736D53

export const C_V = 0x40 // center value for PAN, BEND, and TUNE

export const SOUND_MODE_REVERB_VAL = 0x0000007F
export const SOUND_MODE_REVERB_SET = 0x00000080
export const SOUND_MODE_MAXCHN = 0x00000F00
export const SOUND_MODE_MAXCHN_SHIFT = 8
export const SOUND_MODE_MASVOL = 0x0000F000
export const SOUND_MODE_MASVOL_SHIFT = 12
export const SOUND_MODE_FREQ_05734 = 0x00010000
export const SOUND_MODE_FREQ_07884 = 0x00020000
export const SOUND_MODE_FREQ_10512 = 0x00030000
export const SOUND_MODE_FREQ_13379 = 0x00040000
export const SOUND_MODE_FREQ_15768 = 0x00050000
export const SOUND_MODE_FREQ_18157 = 0x00060000
export const SOUND_MODE_FREQ_21024 = 0x00070000
export const SOUND_MODE_FREQ_26758 = 0x00080000
export const SOUND_MODE_FREQ_31536 = 0x00090000
export const SOUND_MODE_FREQ_36314 = 0x000A0000
export const SOUND_MODE_FREQ_40137 = 0x000B0000
export const SOUND_MODE_FREQ_42048 = 0x000C0000
export const SOUND_MODE_FREQ = 0x000F0000
export const SOUND_MODE_FREQ_SHIFT = 16
export const SOUND_MODE_DA_BIT_9 = 0x00800000
export const SOUND_MODE_DA_BIT_8 = 0x00900000
export const SOUND_MODE_DA_BIT_7 = 0x00A00000
export const SOUND_MODE_DA_BIT_6 = 0x00B00000
export const SOUND_MODE_DA_BIT = 0x00B00000
export const SOUND_MODE_DA_BIT_SHIFT = 20

export let MPlayTable: MusicPlayer[];
export let SongTable: Song[];

export interface WaveData
{
    type: number
    status: number
    freq: number
    loopStart: number
    size: number // number of samples
    data: any // samples
}

export interface ToneData {
    type: number
    key: number
    length: number // sound length (compatible sound)
    pan_sweep: number // pan or sweep (compatible sound ch. 1)
    wav: WaveData
    attack: number
    decay: number
    sustain: number
    release: number
}

export interface CgbChannel {
    sf: number
    ty: number
    rightVolume: number
    leftVolume: number
    at: number
    de: number
    su: number
    re: number
    ky: number
    ev: number
    eg: number
    ec: number
    echoVolume: number
    echoLength: number
    d1: number
    d2: number
    gt: number
    mk: number
    ve: number
    pr: number
    rp: number
    d3: number[] // 3
    d5: number
    sg: number
    n4: number
    pan: number
    panMask: number
    mo: number
    le: number
    sw: number
    fr: number
    wp: string
    cp: number
    tp: number
    pp: number
    np: number
    d4: number[] // 8
}

export interface SoundChannel {
    status: number
    type: number
    rightVolume: number
    leftVolume: number
    attack: number
    decay: number
    sustain: number
    release: number
    ky: number
    ev: number
    er: number
    el: number
    echoVolume: number
    echoLength: number
    d1: number
    d2: number
    gt: number
    mk: number
    ve: number
    pr: number
    rp: number
    d3: any
    ct: number
    fw: number
    freq: number
    wav: WaveData
    cp: number
    track: MusicPlayerTrack
    pp: number
    np: number
    d4: number
    xpi: number
    xpc: number
}

export const MAX_DIRECTSOUND_CHANNELS = 12

export const PCM_DMA_BUF_SIZE = 1584 // size of Direct Sound buffer

export interface SoundInfo {
    // This field is normally equal to ID_NUMBER but it is set to other
    // values during sensitive operations for locking purposes.
    // This field should be volatile but isn't. This could potentially cause
    // race conditions.
    ident: number

    pcmDmaCounter: number

    // Direct Sound
    reverb: number
    maxChans: number
    masterVolume: number
    freq: number

    mode: number
    c15: number
    pcmDmaPeriod: number // number of V-blanks per PCM DMA
    maxLines: number
    gap: any
    pcmSamplesPerVBlank: number
    pcmFreq: number
    divFreq: number
    cgbChans: CgbChannel
    func: number
    intp: number

    // TODO -how to handle this?
    // void (*CgbSound)(void): number
    // void (*CgbOscOff)(u8): number
    // (*MidiKeyToCgbFreq)(u8, u8, u8): number
    MPlayJumpTable: number
    plynote: number
    ExtVolPit: number
    gap2: number[] // 16
    chans: SoundChannel[] // MAX_DIRECTSOUND_CHANNELS
    pcmBuffer: number[] // PCM_DMA_BUF_SIZE * 2
}


export interface SongHeader {
    trackCount: number
    blockCount: number
    priority: number
    reverb: number
    tone: ToneData
    part: any
}

export const MPT_FLG_VOLSET = 0x01
export const MPT_FLG_VOLCHG = 0x03
export const MPT_FLG_PITSET = 0x04
export const MPT_FLG_PITCHG = 0x0C
export const MPT_FLG_START = 0x40
export const MPT_FLG_EXIST = 0x80

export interface MusicPlayerTrack {
    flags: number
    wait: number
    patternLevel: number
    repN: number
    gateTime: number
    key: number
    velocity: number
    runningStatus: number
    keyM: number
    pitM: number
    keyShift: number
    keyShiftX: number
    tune: number
    pitX: number
    bend: number
    bendRange: number
    volMR: number
    volML: number
    vol: number
    volX: number
    pan: number
    panX: number
    modM: number
    mod: number
    modT: number
    lfoSpeed: number
    lfoSpeedC: number
    lfoDelay: number
    lfoDelayC: number
    priority: number
    echoVolume: number
    echoLength: number
    chan: SoundChannel
    tone: ToneData
    gap: any
    unk_3A: number
    unk_3C: number
    cmdPtr: any
    patternStack: any
}

export const MUSICPLAYER_STATUS_TRACK = 0x0000ffff
export const MUSICPLAYER_STATUS_PAUSE = 0x80000000

export interface MusicPlayerInfo {
    songHeader: SongHeader
    status: number
    trackCount: number
    priority: number
    cmd: number
    unk_B: number
    clock: number
    gap: any
    memAccArea: any
    tempoD: number
    tempoU: number
    tempoI: number
    tempoC: number
    fadeOI: number
    fadeOC: number
    fadeOV: number
    tracks: MusicPlayerTrack[]
    tone: ToneData
    ident: number
    func: number
    intp: number
}

export interface MusicPlayer {
    info: MusicPlayerInfo
    track: MusicPlayerTrack
    unk_8: number
    unk_A: number
}

export interface Song {
    header: SongHeader
    ms: number
    me: number
}