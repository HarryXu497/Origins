export class ConsumeAction {
    private readonly type = 'origins:consume';
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
}

interface ConsumeObject {
    amount?: number;
}

/**
 * 
 * @description Removes a provided amount of items from the item stack.
 * @param {number} [amount=1] - The amount of items to remove.
 * @returns The formatted object representing the item action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/item_action_types/consume/ External Documentation}
 */
export default function consume({ amount = 1 }: ConsumeObject) {
    return new ConsumeAction(amount);
}
