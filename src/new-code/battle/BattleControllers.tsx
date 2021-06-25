import { ReceivedRemoteLinkPlayers, SetWirelessCommType1, WirelessCommType } from "../link/Link";
import { BattleState } from "./BattleMain";
import { BATTLE_TYPE } from "./enums/BattleType";

export function HandleLinkBattleSetup() {
    if (BattleState.BattleTypeFlags & BATTLE_TYPE.LINK){
        if (WirelessCommType)
            SetWirelessCommType1();
        if (!ReceivedRemoteLinkPlayers)
            OpenLink();
        CreateTask(Task_WaitForReceivedRemoteLinkPlayers5SecondTimeout, 0);
        CreateTasksForSendRecvLinkBuffers();
    }
}
