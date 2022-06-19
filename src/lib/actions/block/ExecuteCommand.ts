export class ExecuteCommandAction {
    public readonly type = 'origins:execute_command';
    private command: string;

    constructor(commandToExecute: string) {
        this.command = commandToExecute
    }
}

interface ExecuteCommandObject {
    commandToExecute: string;
}

/**
 * 
 * @description Executes a command at the position of the block.
 * @param {string} commandToExecute - The command to execute.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/execute_command/ External Documemtation}
 */
export default function executeCommand({ commandToExecute }: ExecuteCommandObject) {
    return new ExecuteCommandAction(commandToExecute);
}