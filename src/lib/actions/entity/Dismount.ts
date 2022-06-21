export class DismountAction {
    private readonly type = 'origins:dismount'
}

/**
 * 
 * @description Dismounts the entity from their vehicle.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/dismount/ External Documentation}.
 */
export default function dismount() {
    return new DismountAction();
}