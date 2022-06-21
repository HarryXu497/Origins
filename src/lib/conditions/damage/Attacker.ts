import { EntityConditionType } from "../../@types/condition/entity";

class AttackerCondition {
    private readonly type = 'origins:attacker'
    public entity_condition: EntityConditionType;

    constructor() {

    }

    setEntityCondition(entityCondition: EntityConditionType) {
        this.entity_condition = entityCondition;
        return this;
    }

    where(entityCondition: EntityConditionType) {
        return this.setEntityCondition(entityCondition)
    }
}

export default AttackerCondition;