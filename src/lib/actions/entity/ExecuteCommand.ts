export class ExecuteCommandAction {
    private readonly type = 'origins:execute_command';
    private command: string;

    constructor(command: string) {
        this.command = command;
    }
}

interface ExecuteCommandObject {
    command: string;
}

/**
 * 
 * @description Executes a command with the entity as the source (i.e. \@s will select the entity itself).
 * @param {string} command - The command to execute on the entity. 
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/execute_command/ External Documentation}.
 */
export default function executeCommand({ command }: ExecuteCommandObject) {
    return new ExecuteCommandAction(command);
}