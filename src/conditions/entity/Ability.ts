import { PlayerAbilities } from '../../@types/player/player.s';

class AbilityCondition {
    public readonly type = 'origins:ability';
    public ability: PlayerAbilities;

    setAbility(ability: PlayerAbilities) {
        this.ability = ability;
        return this;
    }
}

export default AbilityCondition;