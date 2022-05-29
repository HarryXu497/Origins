import { ItemConditionType } from "../../@types/condition/item";
import Condition from "../Condition";

type Slot = 'mainhand' | 'offhand' | 'head' | 'chest' | 'legs' | 'feet';

class EquippedItemCondition extends Condition {
    public readonly type = 'origins:equipped_item'

    public equipment_slot: Slot;
    public item_condition: ItemConditionType;

    constructor(equipment_slot?: Slot, item_condition?: ItemConditionType) {
        super();
        this.equipment_slot = equipment_slot;
        this.item_condition = item_condition;
    }

    setEquipmentSlot(slot: Slot) {
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