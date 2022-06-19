export class SetBlockAction {
    public readonly type = 'origins:set_block';
    private block: string;

    constructor(block: string) {
        this.block = block;
    }
}

interface SetBlockObject {
    block: string;
}

/**
 * 
 * @description Overwrites the block at the targeted position with the default state of another one.
 * @param {string} block - The namespace and ID of the block to place.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/set_block/ External Documentation}.
 */
export default function setBlock({ block }: SetBlockObject) {
    return new SetBlockAction(block);
}

