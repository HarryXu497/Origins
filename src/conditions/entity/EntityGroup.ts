import Condition from "../Condition";

type EntityGroup = 'default' | 'undead' | 'arthropod' | 'illager' | 'aquatic';

class EntityGroupCondition extends Condition {
    public readonly type = 'origins:entity_group';
    public group: EntityGroup = 'default';

    constructor(group?: EntityGroup) {
        super();
        this.group = group;
    }

    setGroup(group: EntityGroup) {
        this.group = group;
    }
}

export class EntityGroupConditionFactory {
    private readonly instance: EntityGroupCondition;

    constructor() {
        this.instance = new EntityGroupCondition();
    }

    mustBeUndead() {
        this.instance.group = 'undead';
        return this.instance;
    }

    mustBeArthropod() {
        this.instance.group = 'arthropod';
        return this.instance;
    }

    mustBeIllager () {
        this.instance.group = 'illager';
        return this.instance;
    }

    mustBeAquatic() {
        this.instance.group = 'aquatic';
        return this.instance;
    }

    canBeAny() {
        this.instance.group = 'default';
        return this.instance;
    }
}

export default EntityGroupCondition;
export function entityGroup() {
    return new EntityGroupConditionFactory();
}