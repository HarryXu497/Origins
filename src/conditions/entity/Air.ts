import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';

class AirCondition extends Condition {
    public readonly type = 'origins:air';
    public comparison: Comparison;
    public compare_to: number;

    constructor(comparison?: Comparison, compare_to?: number) {
        super();
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

export class AirConditionFactory {
    private readonly instance: AirCondition;

    constructor() {
        this.instance = new AirCondition();
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

export default AirCondition;
export function air() {
    return new AirConditionFactory();
}
