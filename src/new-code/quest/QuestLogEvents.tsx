import { QL_EVENT } from "./enums/QuestLogEvent";

export function SetQuestLogEvent(eventId: number, eventData: any) {
    let r1;

    if (eventId == QL_EVENT.DEPARTED && sEventShouldNotRecordSteps == 2)
    {
        QL_EnableRecordingSteps();
        return;
    }
    QL_EnableRecordingSteps();
    if (gQuestLogState == QL_STATE_PLAYBACK)
        return;

    if (!IS_VALID_QL_EVENT(eventId))
        return;

    if (InQuestLogDisabledLocation() == true)
        return;

    if (TrySetLinkQuestLogEvent(eventId, eventData) == true)
        return;

    if (MenuHelpers_LinkSomething() == true)
        return;

    if (InUnionRoom() == true)
        return;

    if (TrySetTrainerBattleQuestLogEvent(eventId, eventData) == true)
        return;

    if (IsQuestLogEventWithSpecialEncounterSpecies(eventId, eventData) == true)
        return;

    if (ShouldRegisterEvent_HandleGameCorner(eventId, eventData) == false)
        return;

    if (gQuestLogPlaybackState == 0)
    {
        if (ShouldRegisterEvent_HandlePartyActions(eventId, eventData) == true)
            return;

        if (eventId != QL_EVENT_DEFEATED_WILD_MON || gUnknown_203AE04 == NULL)
        {
            if (ShouldRegisterEvent_HandleDeparted(eventId, eventData) == false)
                return;
            StartRecordingQuestLogEntry(eventId);
        }
    }
    else if (eventId == QL_EVENT_OBTAINED_ITEM)
        return;

    SetQuestLogEventToActive(eventId);
    if (eventId == QL_EVENT_DEFEATED_WILD_MON)
    {
        if (gUnknown_203AE04 == NULL)
        {
            gUnknown_203AE04 = sEventRecordingPointer;
            r1 = sQuestLogStorageCBs[eventId](gUnknown_203AE04, eventData);
        }
        else
        {
            sQuestLogStorageCBs[eventId](gUnknown_203AE04, eventData);
            return;
        }
    }
    else
    {
        gUnknown_203AE04 = NULL;
        r1 = sQuestLogStorageCBs[eventId](sEventRecordingPointer, eventData);
    }

    if (r1 == NULL)
    {
        FinishRecordingQuestLogScene();
        r1 = ShouldRegisterEvent(eventId, eventData);
        if (r1 == NULL)
            return;
    }

    sEventRecordingPointer = r1;
    if (sEventShouldNotRecordSteps == 0)
        return;
    FinishRecordingQuestLogScene();
}
