import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';

class EnchantmentCondition extends Condition {
    public readonly type = 'origins:enchantment';
    public enchantment: string;
    public calculation: 'sum' | 'max';
    public comparison: Comparison;
    public compare_to: number;

    constructor(enchantment?: string, comparison?: Comparison, compare_to?: number, calculation?: 'sum' | 'max') {
        super();
        this.enchantment = enchantment
        this.comparison = comparison;
        this.compare_to = compare_to;
        this.calculation = calculation;
    }

    setEnchantment(enchantment: string) {
        this.enchantment = enchantment;
    }

    setCalculation(calculation: 'sum' | 'max') {
        this.calculation = calculation;
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

class EnchantmentSumConditionFactory {
    private readonly instance: EnchantmentCondition;

    constructor(enchantment: string) {
        this.instance = new EnchantmentCondition(enchantment);
        this.instance.calculation = 'sum';
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

class EnchantmentMaxConditionFactory {
    private readonly instance: EnchantmentCondition;

    constructor(enchantment: string) {
        this.instance = new EnchantmentCondition(enchantment);
        this.instance.calculation = 'max';
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

class EnchantmentConditionFactory {
    public enchantment: string;

    constructor(enchantment: string) {
        this.enchantment = enchantment
    }

    sum() {
        return new EnchantmentSumConditionFactory(this.enchantment);
    }

    max() {
        return new EnchantmentMaxConditionFactory(this.enchantment);
    }
}

export default EnchantmentCondition;
export function enchantment(enchantment: string) {
    return new EnchantmentConditionFactory(enchantment);
}
