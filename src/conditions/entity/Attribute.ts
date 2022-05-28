import { Comparison } from "../../@types/datatypes/datatypes";

class AttributeCondition {
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

class AttributeConditionFactory {
    private readonly instance: AttributeCondition;

    constructor(attribute: string) {
        this.instance = new AttributeCondition();
        this.instance.attribute = attribute;
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


export default AttributeCondition;
export function attribute(attribute: string) {
    return new AttributeConditionFactory(attribute);
}