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

export class AdvancementConditionFactory {
    private readonly instance: AdvancementCondition;

    constructor() {
        this.instance = new AdvancementCondition();
    }

    mustBe(advancement: string) {
        this.instance.advancement = advancement;
        return this.instance;
    }
}

export default AdvancementCondition;
export function achievements() {
    return new AdvancementConditionFactory();
}