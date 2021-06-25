
export const HEAD_SENTINEL = 0xFE
export const TAIL_SENTINEL = 0xFF

export const NUM_TASKS = 16
export const NUM_TASK_DATA = 16

export interface Task {
    func: (taskId: number) => void
    isActive: boolean
    prev: number
    next: number
    priority: number
    data: number[] // NUM_TASK_DATA
}

export let Tasks: Task[];


export function CreateTask(func: (taskId: number) => void, priority: number): number {
    let i;

    for (i = 0; i < NUM_TASKS; i++)
    {
        if (!Tasks[i].isActive)
        {
            Tasks[i].func = func;
            Tasks[i].priority = priority;
            InsertTask(i);
            // ignore memory stuff
            //memset(Tasks[i].data, 0, sizeof(Tasks[i].data));
            Tasks[i].isActive = true;
            return i;
        }
    }

    return 0;
}

export function InsertTask(newTaskId: number) {
    let taskId = FindFirstActiveTask();

    if (taskId == NUM_TASKS)
    {
        // The new task is the only task.
        Tasks[newTaskId].prev = HEAD_SENTINEL;
        Tasks[newTaskId].next = TAIL_SENTINEL;
        return;
    }

    while (1)
    {
        if (Tasks[newTaskId].priority < Tasks[taskId].priority)
        {
            // We've found a task with a higher priority value,
            // so we insert the new task before it.
            Tasks[newTaskId].prev = Tasks[taskId].prev;
            Tasks[newTaskId].next = taskId;
            if (Tasks[taskId].prev != HEAD_SENTINEL)
                Tasks[Tasks[taskId].prev].next = newTaskId;
            Tasks[taskId].prev = newTaskId;
            return;
        }
        if (Tasks[taskId].next == TAIL_SENTINEL)
        {
            // We've reached the end.
            Tasks[newTaskId].prev = taskId;
            Tasks[newTaskId].next = Tasks[taskId].next;
            Tasks[taskId].next = newTaskId;
            return;
        }
        taskId = Tasks[taskId].next;
    }
}

export function DestroyTask(taskId: number) {
    if (Tasks[taskId].isActive)
    {
        Tasks[taskId].isActive = false;

        if (Tasks[taskId].prev == HEAD_SENTINEL)
        {
            if (Tasks[taskId].next != TAIL_SENTINEL)
                Tasks[Tasks[taskId].next].prev = HEAD_SENTINEL;
        }
        else
        {
            if (Tasks[taskId].next == TAIL_SENTINEL)
            {
                Tasks[Tasks[taskId].prev].next = TAIL_SENTINEL;
            }
            else
            {
                Tasks[Tasks[taskId].prev].next = Tasks[taskId].next;
                Tasks[Tasks[taskId].next].prev = Tasks[taskId].prev;
            }
        }
    }
}

export function RunTasks() {
    let taskId = FindFirstActiveTask();

    if (taskId != NUM_TASKS)
    {
        do
        {
            Tasks[taskId].func(taskId);
            taskId = Tasks[taskId].next;
        } while (taskId != TAIL_SENTINEL);
    }
}

export function FindFirstActiveTask(): number{
    let taskId;

    for (taskId = 0; taskId < NUM_TASKS; taskId++)
        if (Tasks[taskId].isActive == true && Tasks[taskId].prev == HEAD_SENTINEL)
            break;

    return taskId;
}


export function FuncIsActiveTask(func: (taskId: number) => void): boolean {
    let i;

    for (i = 0; i < NUM_TASKS; i++)
        if (Tasks[i].isActive == true && Tasks[i].func == func)
            return true;

    return false;
}