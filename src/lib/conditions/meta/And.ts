import { ConditionType } from '../../@types/condition/index';
import Condition from '../Condition';

export class AndCondition extends Condition {
    private readonly type = 'origins:and';

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

export default function and(...conditions: ConditionType[]) {
    return new AndCondition(...conditions);
}
