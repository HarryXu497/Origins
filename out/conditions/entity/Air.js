import Condition from '../Condition';
class AirCondition extends Condition {
    constructor(comparison, compare_to) {
        super();
        this.type = 'origins:air';
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
class AirConditionFactory {
    constructor() {
        this.instance = new AirCondition();
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
export default AirCondition;
export function air() {
    return new AirConditionFactory();
}
