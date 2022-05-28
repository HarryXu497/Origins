class AdvancementCondition {
    constructor(advancement = "") {
        this.type = 'origins:advancement';
        this.advancement = advancement;
    }
    setAdvancement(advancement) {
        this.advancement = advancement;
        return this;
    }
}
export default AdvancementCondition;
