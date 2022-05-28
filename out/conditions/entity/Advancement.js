class AdvancementCondition {
    constructor() {
        this.type = 'origins:advancement';
    }
    setAdvancement(advancement) {
        this.advancement = advancement;
        return this;
    }
}
export default AdvancementCondition;
