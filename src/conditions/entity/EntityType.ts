import Condition from "../Condition";

class EntityTypeCondition extends Condition {
    public readonly type = 'origins:entity_group';
    public entity_type: string

    constructor(entityType?: string) {
        super();
        this.entity_type = entityType;
    }

    setEntityType(entityType: string) {
        this.entity_type = entityType;
    }
}

class EntityTypeConditionFactory {
    private readonly instance: EntityTypeCondition;

    constructor() {
        this.instance = new EntityTypeCondition();
    }

    mustBe(entity: string) {
        this.instance.entity_type = entity;
        return this.instance;
    }
}

export default EntityTypeCondition;
export function entityType() {
    return new EntityTypeConditionFactory();
}