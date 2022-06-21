export class ExtinguishAction {
    private readonly type = 'origins:extinguish';
}

/**
 * 
 * @description Extinguishes the fire from the entity, removing the burning effect.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/extinguish/ External Documentation}.
 */
export default function extinguish() {
    return new ExtinguishAction();
}