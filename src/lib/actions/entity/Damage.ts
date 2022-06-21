import { DamageSource } from '../../datatypes/DamageSource';

export class DamageAction {
    private readonly type = 'origins:damage';
    private amount: number;
    private source: DamageSource;

    constructor(amount: number, source: DamageSource) {
        this.amount = amount;
        this.source = source;
    }
}

interface DamageObject {
    amount: number;
    source: DamageSource;
}

/**
 * 
 * @description Applies damage to an entity.
 * @param {number} amount - The amount of damage to deal. 
 * @param {DamageSource} source - The damage source to be used. Controls e.g. the death message, invulnerabilities (e.g. towards fire), or whether armor is taken into account.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/damage/ External Documentation}.
 */
export default function damage({ amount, source }: DamageObject) {
    return new DamageAction(amount, source);
}