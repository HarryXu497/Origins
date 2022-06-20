export class EmitGameEventAction {
    public readonly type = 'origins:emit_game_event';
    private event: string;

    constructor(event: string) {
        this.event = event;
    }
}

interface EmitGameEventObject {
    event: string;
}

/**
 * @description Emits a 'game event' at the entity's position.
 * @param {string} event - The namespace and ID of a game event.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/emit_game_event/ External Documentation}
 */
export default function emitGameEvent({ event }: EmitGameEventObject) {
    return new EmitGameEventAction(event);
}