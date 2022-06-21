import { ItemStack } from "../../datatypes/ItemStack";
import { ItemActionTypes } from '../../@types/action/item';
import { EquipmentSlot } from '../../@types/datatypes/datatypes';

export class GiveAction {
    private readonly type = 'origins:give';
    private stack: ItemStack;
    private item_action: ItemActionTypes;
    private preferred_slot: EquipmentSlot;

    constructor(stack: ItemStack, itemAction?: ItemActionTypes, preferredSlot?: EquipmentSlot) {
        this.stack = stack;
        this.item_action = itemAction;
        this.preferred_slot = preferredSlot;
    }
}

interface GiveObject {
    stack: ItemStack;
    itemAction?: ItemActionTypes;
    preferredSlot?: EquipmentSlot;
}

/**
 *
 * @description Gives the entity an item stack by inserting it into its inventory or dropping it on the ground if there is no available inventory space.
 * @param {ItemStack} stack - The item stack to give to the entity.
 * @param {ItemActionTypes} itemAction - If specified, the specified item action type will be executed on the item stack before it's given to the player.
 * @param {EquipmentSlot} preferredSlot - If specified, this will prioritize the action to put the item in the specified slot. Accepts "chest", "feet", "head", "legs", "mainhand" or "offhand".
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/give/ External Documentation}.
 */
export default function give({ stack, itemAction, preferredSlot }: GiveObject) {
    return new GiveAction(stack, itemAction, preferredSlot);
}