import Condition from "../Condition";

class AdvancementCondition extends Condition {
    public readonly type = 'origins:advancement';
    public advancement: string;

    constructor(advancement: string = "") {
        super()
        this.advancement = advancement;
    }

    setAdvancement(advancement: string) {
        this.advancement = advancement;
        return this;
    }
}

export default AdvancementCondition;