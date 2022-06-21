import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';
class BrightnessCondition extends Condition {
    private readonly type = 'origins:brightness';
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

export class BrightnessConditionFactory {
    private readonly instance: BrightnessCondition;

    constructor() {
        this.instance = new BrightnessCondition();
    }

    isGreaterThan(value: number) {
        this.instance.comparison = '>';
        this.instance.compare_to = value;
        return this.instance;
    }

    isGreaterThanOrEqualTo(value: number) {
        this.instance.comparison = '>=';
        this.instance.compare_to = value;
        return this.instance;
    }

    isLessThan(value: number) {
        this.instance.comparison = '<';
        this.instance.compare_to = value;
        return this.instance;
    }

    isLessThanOrEqualTo(value: number) {
        this.instance.comparison = '<=';
        this.instance.compare_to = value;
        return this.instance;
    }

    isEqualTo(value: number) {
        this.instance.comparison = '==';
        this.instance.compare_to = value;
        return this.instance;
    }

    isNotEqualTo(value: number) {
        this.instance.comparison = '!=';
        this.instance.compare_to = value;
        return this.instance;
    }

    mobsCanSpawn() {
        this.instance.comparison = '==';
        this.instance.compare_to = 0;
        return this.instance;
    }
}

export default BrightnessCondition;
export function brightness() {
    return new BrightnessConditionFactory();
}
