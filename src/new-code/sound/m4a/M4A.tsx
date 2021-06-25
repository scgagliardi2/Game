import { SOUND_INFO_PTR } from "../../../firered/Defines";
import { ID_NUMBER, MAX_DIRECTSOUND_CHANNELS, MPlayTable, MPT_FLG_EXIST, MPT_FLG_START, MusicPlayer, MusicPlayerInfo, MUSICPLAYER_STATUS_PAUSE, MUSICPLAYER_STATUS_TRACK, Song, SongHeader, SongTable, SOUND_MODE_DA_BIT, SOUND_MODE_FREQ, SOUND_MODE_MASVOL, SOUND_MODE_MASVOL_SHIFT, SOUND_MODE_MAXCHN, SOUND_MODE_MAXCHN_SHIFT, SOUND_MODE_REVERB_SET, SOUND_MODE_REVERB_VAL } from "./M4AInternal";


export function m4aSongNumStart(n: number) {
    let mplayTable: MusicPlayer[] = MPlayTable;
    let songTable: Song[] = SongTable;
    let song: Song = songTable[n];
    let mplay: MusicPlayer = mplayTable[song.ms];

    MPlayStart(mplay.info, song.header);
}


export function MPlayStart(mplayInfo: MusicPlayerInfo, songHeader: SongHeader) {
    // TODO - implement
}

export function MPlayFadeOut(mplayInfo: MusicPlayerInfo, speed: number) {
      // TODO - implement
}

export function m4aMPlayStop(mplayInfo: MusicPlayerInfo) {
    // TODO - implement
}

export function m4aMPlayFadeOut(mplayInfo: MusicPlayerInfo, speed: number) {
    MPlayFadeOut(mplayInfo, speed);
}


export function m4aSoundMode(mode: number) {
    let soundInfo = SOUND_INFO_PTR;
    let temp;

    if (soundInfo.ident != ID_NUMBER)
        return;

    soundInfo.ident++;

    temp = mode & (SOUND_MODE_REVERB_SET | SOUND_MODE_REVERB_VAL);

    if (temp)
        soundInfo.reverb = temp & SOUND_MODE_REVERB_VAL;

    temp = mode & SOUND_MODE_MAXCHN;

    if (temp)
    {
        let chan;

        soundInfo.maxChans = temp >> SOUND_MODE_MAXCHN_SHIFT;

        temp = MAX_DIRECTSOUND_CHANNELS;

        var index = 0
        while (temp != 0)
        {
            chan = soundInfo.chans[index];

            chan.status = 0;
            temp--;
            index++;
        }
    }

    temp = mode & SOUND_MODE_MASVOL;

    if (temp)
        soundInfo.masterVolume = temp >> SOUND_MODE_MASVOL_SHIFT;

    temp = mode & SOUND_MODE_DA_BIT;

    if (temp)
    {
        temp = (temp & 0x300000) >> 14;
        REG_SOUNDBIAS_H = (REG_SOUNDBIAS_H & 0x3F) | temp;
    }

    temp = mode & SOUND_MODE_FREQ;

    if (temp)
    {
        m4aSoundVSyncOff();
        SampleFreqSet(temp);
    }

    soundInfo.ident = ID_NUMBER;
}

export function m4aSongNumStop(n: number) {
    let mplayTable: MusicPlayer[] = MPlayTable;
    let songTable: Song[] = SongTable;
    let song: Song = songTable[n];
    let mplay: MusicPlayer = mplayTable[song.ms];

    if (mplay.info.songHeader == song.header)
        m4aMPlayStop(mplay.info);
}
