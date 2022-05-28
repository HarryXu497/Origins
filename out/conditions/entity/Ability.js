class AbilityCondition {
    constructor() {
        this.type = 'origins:ability';
    }
    setAbility(ability) {
        this.ability = ability;
        return this;
    }
}
export default AbilityCondition;
