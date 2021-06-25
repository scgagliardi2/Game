import { SaveBlock1Ptr } from "../Global";
import { MapHeader } from "../../new-code/environment/GlobalFieldMap";

export let MapGroups: MapHeader[][]

export function Overworld_GetMapHeaderByGroupAndId(mapGroup: number, mapNum: number): MapHeader {
    return MapGroups[mapGroup][mapNum];
}


export function GetCurrentRegionMapSectionId(): number {
    return Overworld_GetMapHeaderByGroupAndId(SaveBlock1Ptr.location.mapGroup, SaveBlock1Ptr.location.mapNum).regionMapSectionId;
}