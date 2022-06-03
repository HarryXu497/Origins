import { StatusEffectInstance } from './../../@types/datatypes/datatypes.d';

class ApplyEffect {
    effect: StatusEffectInstance;
    effects: StatusEffectInstance[];

    constructor(...effects: StatusEffectInstance[]) {
        if (effects.length == 1) this.effect = effects[0];
        if (effects.length > 1) this.effects = effects;
    }
}