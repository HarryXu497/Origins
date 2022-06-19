import { BlockActionTypes } from './../../@types/action/block.d';

export class OffsetAction {
    public readonly type = 'origins:offset';
    private action: BlockActionTypes;
    private x: number;
    private y: number;
    private z: number;

    constructor(action: BlockActionTypes, x: number = 0, y: number = 0, z: number = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.action = action;
    }
}

interface OffsetActionObject {
    action: BlockActionTypes;
    x?: number;
    y?: number;
    z?: number;
}

/**
 * 
 * @description Executes the provided Block Action Type at the position offset from the current position.
 * @param {BlockActionTypes} action - The action to apply with the given offset. See {@link BlockActionTypes | Block Action Types}
 * @param {number} x - How much to offset the position on the x-axis.
 * @param {number} y - How much to offset the position on the y-axis.
 * @param {number} z - How much to offset the position on the z-axis.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/offset/ External Documentation}.
 */
export default function offsetAction({ action, x, y, z }: OffsetActionObject) {
    return new OffsetAction(action, x, y, z);
}