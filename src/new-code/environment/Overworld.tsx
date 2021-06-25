import { SaveBlock1 } from "../State";
import { MapHeader } from "./GlobalFieldMap";

export const MapGroups: MapHeader[][] = []

export function Overworld_GetMapHeaderByGroupAndId(mapGroup: number, mapNum: number): MapHeader {
    return MapGroups[mapGroup][mapNum];
}

export function GetCurrentRegionMapSectionId() {
    return Overworld_GetMapHeaderByGroupAndId(SaveBlock1.location.mapGroup, SaveBlock1.location.mapNum).regionMapSectionId;
}