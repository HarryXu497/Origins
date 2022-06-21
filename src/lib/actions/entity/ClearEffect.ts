export class ClearEffectAction {
    private readonly type = 'origins:clear_effect';
    private effect: string;

    constructor(effect?: string) {
        this.effect = effect;
    }
}

interface ClearEffectObject {
    effect?: string;
}

/**
 * 
 * @description Removes one specific type of status effect, or all status effects, from a living entity.
 * @param {string} [effect] - If specified, the status effect with this namespace and ID will be cleared. If not specified, all status effects will be cleared.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/clear_effect/ External Documentation}.
 */
export default function clearEffect({ effect }: ClearEffectObject) {
    return new ClearEffectAction(effect);
}