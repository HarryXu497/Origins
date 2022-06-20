import { BlockActionTypes } from '../../@types/action/block';

class BlockActionAtAction {
    public readonly type = 'origins:block_action_at';
    private block_action: BlockActionTypes;

    constructor(blockAction: BlockActionTypes) {
        this.block_action = blockAction;
    }
}

interface BlockActionAtObject { 
    blockAction: BlockActionTypes;
}

/**
 * 
 * @description Executes a {@link BlockActionTypes Block Action Type} at the position of the entity.
 * @param {BlockActionTypes} blockAction - The block action to execute at the entity.
 * @returns {BlockActionAtAction} The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/block_action_at/ External Documentation}.
 */
export default function blockActionAtEntity({ blockAction }: BlockActionAtObject): BlockActionAtAction {
    return new BlockActionAtAction(blockAction);
}