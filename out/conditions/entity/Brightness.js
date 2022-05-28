import Condition from '../Condition';
class BrightnessCondition extends Condition {
    constructor(comparison, compare_to) {
        super();
        this.type = 'origins:brightness';
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
class BrightnessConditionFactory {
    constructor() {
        this.instance = new BrightnessCondition();
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
export default BrightnessCondition;
export function brightness() {
    return new BrightnessConditionFactory();
}
