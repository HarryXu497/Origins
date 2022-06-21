export class GainAirAction {
    private readonly type = 'origins:gain_air'
    private value: number;

    constructor(value: number) {
        this.value = value;
    }
}

interface GainAirObject {
    value: number;
}

/**
 * 
 * @description Restores breath (bubbles!) to a living entity.
 * @param {number} value - 	The amount of breath to restore. 
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/gain_air/ External Documentation}
 */
export default function gainAir({ value }: GainAirObject) {
    return new GainAirAction(value);
}