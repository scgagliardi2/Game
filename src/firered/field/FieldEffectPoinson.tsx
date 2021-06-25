import { AdjustBgMosaic } from "../bg/BG";
import { AdjustBgMosaicMode } from "../bg/IBG";
import { SE_FIELD_POISON } from "../../new-code/sound/Songs";
import { PlaySE } from "../sound/Sound";
import { CreateTask, DestroyTask, FuncIsActiveTask, Tasks } from "../../new-code/task/Task";

export function Task_FieldPoisonEffect(taskId: number) {
    let data = Tasks[taskId].data;

    switch (data[0])
    {
        case 0:
            data[1] += 1;
            if (data[1] > 4)
                data[0]++;
            break;
        case 1:
            data[1] -= 1;
            if (data[1] == 0)
                data[0]++;
            break;
        case 2:
            DestroyTask(taskId);
            return;
    }

    AdjustBgMosaic(((data[1] << 4) | data[1]), AdjustBgMosaicMode.BG_MOSAIC_SET);
}

export function FldEffPoison_Start() {
    PlaySE(SE_FIELD_POISON);
    CreateTask(Task_FieldPoisonEffect, 80);
}

export function FldEffPoison_IsActive(): boolean {
    return FuncIsActiveTask(Task_FieldPoisonEffect);
}