import { BlockConditionType } from '../../@types/condition/block';
import { DestructionType } from '../../@types/datatypes/datatypes';

export class ExplodeAction {
    public readonly type = 'origins:explode';
    private power: number;
    private destruction_type: DestructionType;
    private indestructable: BlockConditionType;
    private destructable: BlockConditionType;
    private create_fire: boolean;

    constructor(power: number, destructionType: DestructionType = "break", indestructable?: BlockConditionType, destructable?: BlockConditionType, createFire: boolean = false) {
        this.power = power;
        this.destruction_type = destructionType;
        this.indestructable = indestructable;
        this.destructable = destructable;
        this.create_fire = createFire;
    }
}

interface ExplodeActionObject {
    power: number;
    destructionType?: DestructionType;
    indestructable?: BlockConditionType;
    destructable?: BlockConditionType;
    createFire?: boolean;
}

/**
 * 
 * @description Summons an explosion with a specific explosion power.
 * @param {number} power - Determines the power of the explosion.
 * @param {DestructionType} [destructionType="break"] - Determines the effect of the explosion to the terrain. See {@link DestructionType|Destruction Types}.
 * @param {BlockConditionType} [indestructible] - If specified, the blocks that fulfill this condition will not be destroyed by the summoned explosion. See {@link BlockConditionType|Block Condition Types}.
 * @param {BlockConditionType} [destructible] - If specified, only the blocks that fulfill this condition will be destroyed by the summoned explosion. See {@link BlockConditionType|Block Condition Types}.
 * @param {boolean} [createFire=false] - Determines if the summoned explosion should create fire.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/explode/ External Documentation}.
 */
export default function explodeBlock({ power, destructionType, indestructable, destructable, createFire }: ExplodeActionObject) {
    return new ExplodeAction(power, destructionType, indestructable, destructable, createFire);
}