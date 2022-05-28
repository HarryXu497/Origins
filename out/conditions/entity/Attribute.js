class AttributeCondition {
    constructor() {
        this.type = 'origins:attribute';
    }
    setAttribute(attribute) {
        this.attribute = attribute;
    }
    setComparison(comparison) {
        this.comparison = comparison;
    }
    setCompareTo(compareTo) {
        this.compare_to = compareTo;
    }
}
class AttributeConditionFactory {
    constructor(attribute) {
        this.instance = new AttributeCondition();
        this.instance.attribute = attribute;
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
export default AttributeCondition;
export function attribute(attribute) {
    return new AttributeConditionFactory(attribute);
}
