import { Comparison } from "../../@types/datatypes/datatypes";
import Condition from "../Condition";

class AttributeCondition extends Condition {
    public readonly type = 'origins:attribute';
    public attribute: string;
    public comparison: Comparison;
    public compare_to: number;

    setAttribute(attribute: string) {
        this.attribute = attribute;
    }

    setComparison(comparison: Comparison) {
        this.comparison = comparison;
    }

    setCompareTo(compareTo: number) {
        this.compare_to = compareTo;
    }
}

export class AttributeConditionFactory {
    private readonly instance: AttributeCondition;

    constructor(attribute: string) {
        this.instance = new AttributeCondition();
        this.instance.attribute = attribute;
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


export default AttributeCondition;
export function attribute(attribute: string) {
    return new AttributeConditionFactory(attribute);
}