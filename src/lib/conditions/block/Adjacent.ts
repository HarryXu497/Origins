import { BlockConditionType } from '../../@types/condition/block';
import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';

class AdjacentCondition extends Condition {
    public readonly type = 'origins:adjacent';
    public adjacent_condition: BlockConditionType;
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

    setAdjacentCondition(condition: BlockConditionType) {
        this.adjacent_condition = condition;
    }
}

export class AdjacentConditionFactory {
    private readonly instance: AdjacentCondition;

    constructor(condition?: BlockConditionType) {
        this.instance = new AdjacentCondition();
        this.instance.adjacent_condition = condition;
    }

    setAdjacentCondition(condition: BlockConditionType) {
        this.instance.adjacent_condition = condition;
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
}

export default AdjacentCondition;
