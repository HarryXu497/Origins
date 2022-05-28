import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';
class BrightnessCondition extends Condition {
    public readonly type = 'origins:brightness';
    public comparison: Comparison;
    public compare_to: number;

    constructor(comparison?: Comparison, compare_to?: number) {
        super()
        this.comparison = comparison;
        this.compare_to = compare_to;
    }

    setComparison(comparison: Comparison) {
        this.comparison = comparison
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
        return this;
    }
}

class BrightnessConditionFactory {
    private readonly instance: BrightnessCondition;

    constructor() {
        this.instance = new BrightnessCondition();
    }

    mustBeGreaterThan(value: number) {
        this.instance.comparison = '>';
        this.instance.compare_to = value;
        return this.instance;
    }

    mustBeGreaterThanOrEqualTo(value: number) {
        this.instance.comparison = '>=';
        this.instance.compare_to = value;
        return this.instance;
    }

    mustBeLessThan(value: number) {
        this.instance.comparison = '<';
        this.instance.compare_to = value;
        return this.instance;
    }

    mustBeLessThanOrEqualTo(value: number) {
        this.instance.comparison = '<=';
        this.instance.compare_to = value;
        return this.instance;
    }

    mustBeEqualTo(value: number) {
        this.instance.comparison = '==';
        this.instance.compare_to = value;
        return this.instance;
    }

    mustBeNotEqualTo(value: number) {
        this.instance.comparison = '!=';
        this.instance.compare_to = value;
        return this.instance;
    }
}

export default BrightnessCondition;
export function brightness() {
    return new BrightnessConditionFactory();
}
