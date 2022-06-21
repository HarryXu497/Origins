import Condition from "../Condition";

class EntityTagCondition extends Condition {
    private readonly type = 'origins:in_tag';
    public entity_type: string

    constructor(entityTag?: string) {
        super();
        this.entity_type = entityTag;
    }

    setEntityTag(entityTag: string) {
        this.entity_type = entityTag;
    }
}

export class EntityTagConditionFactory {
    private readonly instance: EntityTagCondition;

    constructor() {
        this.instance = new EntityTagCondition();
    }

    is(entity: string) {
        this.instance.entity_type = entity;
        return this.instance;
    }
}

export default EntityTagCondition;
export function entityTag() {
    return new EntityTagConditionFactory();
}