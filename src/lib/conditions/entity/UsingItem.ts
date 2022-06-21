import { ItemConditionType } from '../../@types/condition/item';

class UsingItemCondition {
    private readonly type = 'origins:using_item'

    public item_condition: ItemConditionType

    constructor(itemCondition?: ItemConditionType) {
        this.item_condition = itemCondition;
    }

    setItemCondition(itemCondition: ItemConditionType) {
        this.item_condition = itemCondition;
        return this;
    }

    where(itemCondition: ItemConditionType) {
        return this.setItemCondition(itemCondition)
    }
}





export default UsingItemCondition;