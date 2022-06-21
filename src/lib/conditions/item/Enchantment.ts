import { Comparison } from "../../@types/datatypes/datatypes";
import Condition from "../Condition";

class EnchantmentCondition extends Condition {
    private readonly type = 'origins:enchantment';
    public enchantment: string;
    public comparison: Comparison;
    public compare_to: number;

    constructor(enchantment?: string, comparison?: Comparison, compare_to?: number) {
        super();
        this.enchantment = enchantment;
        this.comparison = comparison;
        this.compare_to = compare_to;
    }

    setEnchantment(value: string) {
        this.enchantment = value;
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

export class EnchantmentConditionFactory {
    private readonly instance: EnchantmentCondition;

    constructor(enchantment: string) {
        this.instance = new EnchantmentCondition(enchantment);
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


export default EnchantmentCondition;