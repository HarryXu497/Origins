import { StatusEffectInstance } from './../../@types/datatypes/datatypes.d';

class ApplyEffect {
    private effect: StatusEffectInstance;
    private effects: StatusEffectInstance[];

    constructor(...effects: StatusEffectInstance[]) {
        if (effects.length == 1) this.effect = effects[0];
        if (effects.length > 1) this.effects = effects;
    }
}   

export default function applyEffect(...effects: StatusEffectInstance[]) {
    return new ApplyEffect(...effects);
}
