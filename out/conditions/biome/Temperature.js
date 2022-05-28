class TemperatureCondition {
    constructor(comparison = null, compare_to = null) {
        this.type = 'origins:temperature';
        this.comparison = comparison;
        this.compare_to = compare_to;
    }
    setComparison(comparison) {
        this.comparison = comparison;
        return this;
    }
    setCompareTo(value) {
        this.compare_to = value;
        return this;
    }
}
class TemperatureConditionFactory {
    constructor() {
        this.instance = new TemperatureCondition();
    }
    mustBeGreaterThan(value) {
        this.instance.comparison = '>';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeGreaterThanOrEqualTo(value) {
        this.instance.comparison = '>=';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeLessThan(value) {
        this.instance.comparison = '<';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeLessThanOrEqualTo(value) {
        this.instance.comparison = '<=';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeEqualTo(value) {
        this.instance.comparison = '==';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeNotEqualTo(value) {
        this.instance.comparison = '!=';
        this.instance.compare_to = value;
        return this.instance;
    }
}
export default TemperatureCondition;
export function biomeTemperature() {
    return new TemperatureConditionFactory();
}
