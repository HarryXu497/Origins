import { StatusEffectInstance } from './../../@types/datatypes/datatypes.d';
import statusEffect from '../../datatypes/StatusEffectInstance';

class ApplyEffect {
    effect: StatusEffectInstance;
    effects: StatusEffectInstance[];

    constructor(...effects: StatusEffectInstance[]) {
        if (effects.length == 1) this.effect = effects[0];
        if (effects.length > 1) this.effects = effects;
    }
}   

export default function applyEffect(...effects: StatusEffectInstance[]) {
    return new ApplyEffect(...effects);
}

applyEffect(
    statusEffect({
        effect: "minecraft:speed",
        duration: 400,
        is_ambient: true,
        
    })
)