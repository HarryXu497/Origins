export class BonemealAction {
    public readonly type = 'origins:bonemeal';
    private effects: boolean;

    constructor(showEffect: boolean) {
        this.effects = showEffect;
    }
}

interface BonemealObject {
    showEffects: boolean
}

/**
 *
 * @description Applies bone meal to the target block as if a dispenser or a player used a Bone Meal item to it.
 * @param {boolean} [showEffects=true] - Determines if the particle and other visual effects of the bonemeal-ing action should appear.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/bonemeal/ External Documentation}.
 */
export default function bonemeal({ showEffects = true }: BonemealObject ) {
    return new BonemealAction(showEffects);
}