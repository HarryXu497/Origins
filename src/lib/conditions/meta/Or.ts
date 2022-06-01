import { ConditionType } from '../../@types/condition/index';
import Condition from '../Condition';

export class OrCondition extends Condition {
    public readonly type = 'origins:or';

    public conditions: ConditionType[];

    constructor(...conditions: ConditionType[]) {
        super();
        this.conditions = conditions;
    }

    setConditions(...conditions: ConditionType[]) {
        this.conditions = conditions;
        return this;
    }
}

export default function or(...conditions: ConditionType[]) {
    return new OrCondition(...conditions);
}
