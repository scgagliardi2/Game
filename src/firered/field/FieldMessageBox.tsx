
export let MessageBoxType = 0;

export let textbox_fdecode_auto_and_task_add: (str: string) => void

export function ShowFieldMessage(str: string): boolean {
    if (MessageBoxType != 0)
        return false;
    textbox_fdecode_auto_and_task_add(str);
    MessageBoxType = 2;
    return true;
}


export function IsFieldMessageBoxHidden(): boolean {
    if (MessageBoxType == 0)
        return true;
    else
        return false;
}