export class ExhaustAction {
    private readonly type = 'origins:exhaust';
    private amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }
}

interface ExhaustObject {
    amount: number;
}

/**
 * 
 * @description Applies exhaustion to the entity, reducing saturation and hunger. **This entity action type will only work on players.**
 * @param {number} amount - The amount of exhaustion to apply to the player. 
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/exhaust/ External Documentation}.
 */
export default function exhaust({ amount }: ExhaustObject) {
    return new ExhaustAction(amount);
}