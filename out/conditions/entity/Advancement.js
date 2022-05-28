import Condition from "../Condition";
class AdvancementCondition extends Condition {
    constructor(advancement = "") {
        super();
        this.type = 'origins:advancement';
        this.advancement = advancement;
    }
    setAdvancement(advancement) {
        this.advancement = advancement;
        return this;
    }
}
export default AdvancementCondition;
