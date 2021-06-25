export const MAX_LINK_PLAYERS = 4

export let ReceivedRemoteLinkPlayers: boolean
export let WirelessCommType: number



export function OpenLink() {
    // TODO - implement
}

export function GetMultiplayerId(): number {
    // TODO - implement
    return 1
}



export function SetWirelessCommType1() {
    if (!ReceivedRemoteLinkPlayers) {
        WirelessCommType = 1;
    }
}