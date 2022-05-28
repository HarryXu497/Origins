import { PlayerAbilities } from '../../@types/player/player.s';

class AdvancementCondition {
    public readonly type = 'origins:advancement';
    public advancement: string;

    constructor(advancement: string = "") {
        this.advancement = advancement;
    }

    setAdvancement(advancement: string) {
        this.advancement = advancement;
        return this;
    }
}

export default AdvancementCondition;