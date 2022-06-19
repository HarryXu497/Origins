export class AddBlockAction {
    public readonly type = 'origins:add_block';
    private block: string;

    constructor(blockToAdd: string) {
        this.block = blockToAdd;
    }
}

interface AddBlockObject {
    blockToAdd: string
}

/**
 * 
 * @description Adds a block at the specified action position. Adding means setting the block at the position, offset by the direction of the action.
 * @param {string} blockToAdd - The namespace and ID of the block to place.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/add_block/ External Documentation}.
 */
export default function addBlock({ blockToAdd }: AddBlockObject) {
    return new AddBlockAction(blockToAdd);   
}
