export let ScriptContext1Status: number;
export let ScriptContext2Enabled: boolean;


export function ScriptContext2_Enable() {
    ScriptContext2Enabled = true;
}


export function ScriptContext1_Stop() {
    ScriptContext1Status = 1;
}

export function EnableBothScriptContexts() {
    ScriptContext1Status = 0;
    ScriptContext2_Enable();
}