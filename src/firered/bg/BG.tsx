import { AdjustBgMosaicMode } from "./IBG";


export function AdjustBgMosaic(value: number, mode: number): number {
    let mosaicSize;
    let bgMosaicH;
    let bgMosaicV;
    mosaicSize = GetGpuReg(REG_OFFSET_MOSAIC);
    bgMosaicH = mosaicSize & 0xF;
    bgMosaicV = (mosaicSize >> 4) & 0xF;
    mosaicSize &= 0xFF00;

    switch (mode)
    {
        case AdjustBgMosaicMode.BG_MOSAIC_SET:
        default:
            bgMosaicH = value & 0xF;
            bgMosaicV = value >> 0x4;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_SET_H:
            bgMosaicH = value & 0xF;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_INC_H:
            if ((bgMosaicH + value) > 0xF)
                bgMosaicH = 0xF;
            else
                bgMosaicH += value;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_DEC_H:
            if ((bgMosaicH - value) < 0)
                bgMosaicH = 0x0;
            else
                bgMosaicH -= value;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_SET_V:
            bgMosaicV = value & 0xF;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_INC_V:
            if ((bgMosaicV + value) > 0xF)
                bgMosaicV = 0xF;
            else
                bgMosaicV += value;
            break;
        case AdjustBgMosaicMode.BG_MOSAIC_DEC_V:
            if ((bgMosaicV - value) < 0)
                bgMosaicV = 0x0;
            else
                bgMosaicV -= value;
            break;
    }
    mosaicSize |= ((bgMosaicV << 0x4) & 0xF0);
    mosaicSize |= (bgMosaicH & 0xF);
    SetGpuReg(REG_OFFSET_MOSAIC, mosaicSize);
    return mosaicSize;
}
