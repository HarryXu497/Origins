import { BlockConditionType } from '../../@types/condition/block';
import { DestructionType } from '../../@types/datatypes/datatypes';

export class ExplodeAction {
    private readonly type = 'origins:explode';
    private power: number;
    private damage_self: boolean
    private destruction_type: DestructionType;
    private indestructable: BlockConditionType;
    private destructable: BlockConditionType;
    private create_fire: boolean;

    constructor(power: number, destructionType: DestructionType, createFire: boolean, damageSelf: boolean, indestructable?: BlockConditionType, destructable?: BlockConditionType) {
        this.power = power;
        this.destruction_type = destructionType;
        this.indestructable = indestructable;
        this.destructable = destructable;
        this.create_fire = createFire;
        this.damage_self = damageSelf;
    }
}

interface ExplodeActionObject {
    power: number;
    createFire?: boolean;
    damageSelf?: boolean
    destructionType?: DestructionType;
    indestructable?: BlockConditionType;
    destructable?: BlockConditionType;
}

/**
 * 
 * @description Summons an explosion with a specific explosion power.
 * @param {number} power - Determines the power of the explosion.
 * @param {boolean} [createFire=false] - Determines if the summoned explosion should create fire.
 * @param {boolean} [damageSelf=true] - Determines if the entity that invoked the action should take damage from the summoned explosion.
 * @param {DestructionType} [destructionType="break"] - Determines the effect of the explosion to the terrain. See {@link DestructionType|Destruction Types}.
 * @param {BlockConditionType} [indestructible] - If specified, the blocks that fulfill this condition will not be destroyed by the summoned explosion. See {@link BlockConditionType|Block Condition Types}.
 * @param {BlockConditionType} [destructible] - If specified, only the blocks that fulfill this condition will be destroyed by the summoned explosion. See {@link BlockConditionType|Block Condition Types}.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/explode/ External Documentation}.
 */
export default function explode({ power, destructionType = "break", damageSelf = true, indestructable, destructable, createFire = false }: ExplodeActionObject) {
    return new ExplodeAction(power, destructionType, createFire, damageSelf, indestructable, destructable);
}