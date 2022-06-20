import { StatusEffectInstance } from './../../@types/datatypes/datatypes.d';
export class ApplyEffectAction {
    private effect: StatusEffectInstance;
    private effects: StatusEffectInstance[];

    constructor(...effects: StatusEffectInstance[]) {
        if (effects.length == 1) this.effect = effects[0];
        if (effects.length > 1) this.effects = effects;
    }
}   

interface ApplyEffectObject {
    effects: StatusEffectInstance[];
}

/**
 * @description - Adds one or more status effects to the living entity. Does not have an effect on non-living entities.
 * @param {StatusEffectInstance[]} effects - If set, this status effect(s) will be applied by this action.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/apply_effect/ External Documentation}.
 */
export default function applyEffect({ effects } : ApplyEffectObject) {
    return new ApplyEffectAction(...effects);
}
