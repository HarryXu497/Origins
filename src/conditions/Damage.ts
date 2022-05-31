import { AmountConditionFactory } from "./damage/Amount";
import AttackerCondition from './damage/Attacker';
import FireCondition from "./damage/Fire";
import NameCondition from './damage/Name';
import ProjectileCondition from './damage/Projectile';

class DamageConditionFactory {
    amount() {
        return new AmountConditionFactory();
    }

    attacker() {
        return new AttackerCondition();
    }

    isFireDamage() {
        return new FireCondition();
    }

    sourceIs(name: string) {
        return new NameCondition(name);
    }

    isProjectileDamage() {
        return new ProjectileCondition();
    }
}


export default function damage() {
    return new DamageConditionFactory();
};