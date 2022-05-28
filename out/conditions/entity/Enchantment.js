import Condition from '../Condition';
class EnchantmentCondition extends Condition {
    constructor(enchantment, comparison, compare_to, calculation) {
        super();
        this.type = 'origins:enchantment';
        this.enchantment = enchantment;
        this.comparison = comparison;
        this.compare_to = compare_to;
        this.calculation = calculation;
    }
    setEnchantment(enchantment) {
        this.enchantment = enchantment;
    }
    setCalculation(calculation) {
        this.calculation = calculation;
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
class EnchantmentSumConditionFactory {
    constructor(enchantment) {
        this.instance = new EnchantmentCondition(enchantment);
        this.instance.calculation = 'sum';
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
class EnchantmentMaxConditionFactory {
    constructor(enchantment) {
        this.instance = new EnchantmentCondition(enchantment);
        this.instance.calculation = 'max';
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
class EnchantmentConditionFactory {
    constructor(enchantment) {
        this.enchantment = enchantment;
    }
    sum() {
        return new EnchantmentSumConditionFactory(this.enchantment);
    }
    max() {
        return new EnchantmentMaxConditionFactory(this.enchantment);
    }
}
export default EnchantmentCondition;
export function enchantment(enchantment) {
    return new EnchantmentConditionFactory(enchantment);
}
