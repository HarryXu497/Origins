import Condition from "../Condition";

class ExistsCondition extends Condition {
    public readonly type = 'origins:exists';
}

export default ExistsCondition;