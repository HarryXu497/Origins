export class DamageAction {
    private readonly type = 'origins:damage';
    private amount: number;
    private ignore_unbreaking: boolean;

    constructor(amount: number, ignoreUnbreaking: boolean) {
        this.amount = amount;
        this.ignore_unbreaking = ignoreUnbreaking;
    }
}

interface DamageObject {
    amount?: number;
    ignoreUnbreaking?: boolean;
}

/**
 * 
 * @description Damages the item stack with a specified amount.
 * @param {number} [amount=1] - Damages the item stack with a specified amount.
 * @param {boolean} [ignoreUnbreaking=false] Determines if this action should ignore the Unbreaking enchantment.
 * @returns The formatted object representing the item action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/item_action_types/damage/ External Documentation}
 */
export default function damage({ amount = 1, ignoreUnbreaking = false }: DamageObject) {
    return new DamageAction(amount, ignoreUnbreaking);
}