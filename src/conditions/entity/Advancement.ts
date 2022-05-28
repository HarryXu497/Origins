import { PlayerAbilities } from '../../@types/player/player.s';

class AdvancementCondition {
    public readonly type = 'origins:advancement';
    public advancement: string;

    setAdvancement(advancement: string) {
        this.advancement = advancement;
        return this;
    }
}

export default AdvancementCondition;