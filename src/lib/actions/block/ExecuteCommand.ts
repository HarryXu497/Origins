export class ExecuteCommandAction {
    public readonly type = 'origins:execute_command';
    public command: string;

    constructor(commandToExecute: string) {
        this.command = commandToExecute
    }
}

export default function executeCommand(commandToExecute: string) {
    return new ExecuteCommandAction(commandToExecute);
}