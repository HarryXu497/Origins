import { ItemConditionType } from "../../@types/condition/item";
import { EquipmentSlot } from "../../@types/datatypes/datatypes";
import Condition from "../Condition";

class EquippedItemCondition extends Condition {
    public readonly type = 'origins:equipped_item'

    public equipment_slot: EquipmentSlot;
    public item_condition: ItemConditionType;

    constructor(equipment_slot?: EquipmentSlot, item_condition?: ItemConditionType) {
        super();
        this.equipment_slot = equipment_slot;
        this.item_condition = item_condition;
    }

    setEquipmentSlot(slot: EquipmentSlot) {
        this.equipment_slot = slot;
        return this;
    }

    setItemCondition(condition: ItemConditionType) {
        this.item_condition = condition;
        return this;
    }
}

export default EquippedItemCondition;
export function equippedItem() {
    return new EquippedItemCondition();
}