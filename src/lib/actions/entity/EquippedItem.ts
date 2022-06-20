import { EquipmentSlot } from '../../@types/datatypes/datatypes';
import { ItemActionTypes } from '../../@types/action/item';

export class EquippedItemAction {
    public readonly type = 'origins:equipped_item_action';
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

export default function equippedItem({ equipmentSlot, action }: EquippedItemObject) {
    return new EquippedItemAction(equipmentSlot, action);
}