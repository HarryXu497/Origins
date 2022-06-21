import { EquipmentSlot } from '../../@types/datatypes/datatypes';
import { ItemActionTypes } from './../../@types/action/item.d';

export class EquippedItemAction {
    private readonly type = 'origins:equipped_item_action';
    private equipment_slot: EquipmentSlot;
    private action: ItemActionTypes;

    constructor(equipmentSlot: EquipmentSlot, action: ItemActionTypes) {
        this.equipment_slot = equipmentSlot;
        this.action = action;
    }
}

interface EquippedItemObject {
    equipmentSlot: EquipmentSlot;
    action: ItemActionTypes;
}

/**
 * 
 * @description Executes an {@link https://origins.readthedocs.io/en/latest/types/item_action_types/ Item Action Type} on an item stack in a specified equipment slot.
 * @param {EquipmentSlot} equipmentSlot - Which equipped item to execute the action on. One of: "mainhand", "offhand", "head", "chest", "legs", "feet".
 * @param {ItemActionTypes} action - The item action type to execute on the item stack in the specified equipment slot.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/equipped_item_action/ External Documentation}.
 */
export default function equippedItem({ equipmentSlot, action }: EquippedItemObject) {
    return new EquippedItemAction(equipmentSlot, action);
}