import { PlayerAbilities } from '../../@types/player/player';
import Condition from '../Condition';

class AbilityCondition extends Condition {
    public readonly type = 'origins:ability';
    public ability: PlayerAbilities;

    setAbility(ability: PlayerAbilities) {
        this.ability = ability;
        return this;
    }

    flying() {
        this.ability = 'minecraft:flying';
        return this;
    }

    ableToInstantlyDestroyBlocks() {
        this.ability = 'minecraft:instabuild';
        return this;
    }

    invulnerable() {
        this.ability = 'minecraft:invulnerable';
        return this;
    }

    ableToBuild() {
        this.ability = 'minecraft:mayBuild';
        return this;
    }

    ableToFly() {
        this.ability = 'minecraft:mayfly';
        return this;
    }
}

class AbilityConditionFactory {

    private readonly instance;

    constructor() {
        this.instance = new AbilityCondition()
    }

    beFlying() {
        this.instance.ability = 'minecraft:flying';
        return this.instance;
    }

    beAbleToInstantlyDestroyBlocks() {
        this.instance.ability = 'minecraft:instabuild';
        return this.instance;
    }

    beInvulnerable() {
        this.instance.ability = 'minecraft:invulnerable';
        return this.instance;
    }

    beAbleToBuild() {
        this.instance.ability = 'minecraft:mayBuild';
        return this.instance;
    }

    beAbleToFly() {
        this.instance.ability = 'minecraft:mayfly';
        return this.instance;
    }
}

export default AbilityCondition;
export function playerShould() {
    return new AbilityConditionFactory();
}