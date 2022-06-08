export class ExecuteCommandAction {
    public readonly type = 'origins:execute_command';
    public command: string;

    constructor(commandToExecute: string) {
        this.command = commandToExecute
    }
}

interface ExecuteCommandObject {
    commandToExecute: string;
}

export default function executeCommand({ commandToExecute }: ExecuteCommandObject) {
    return new ExecuteCommandAction(commandToExecute);
}