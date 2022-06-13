import { BlockActionTypes } from './../../@types/action/block.d';

export class OffsetAction {
    public readonly type = 'origins:offset';
    public action: BlockActionTypes;
    public x: number;
    public y: number;
    public z: number;

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

export default function offsetAction({ action, x, y, z }: OffsetActionObject) {
    return new OffsetAction(action, x, y, z);
}