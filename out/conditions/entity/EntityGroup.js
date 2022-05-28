import Condition from "../Condition";
class EntityGroupCondition extends Condition {
    constructor(group) {
        super();
        this.type = 'origins:entity_group';
        this.group = 'default';
        this.group = group;
    }
    setGroup(group) {
        this.group = group;
    }
}
class EntityGroupConditionFactory {
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
    mustBeIllager() {
        this.instance.group = 'illager';
        return this.instance;
    }
    mustBeAquatic() {
        this.instance.group = 'aquatic';
        return this.instance;
    }
}
export default EntityGroupCondition;
export function entityGroup() {
    return new EntityGroupConditionFactory();
}
