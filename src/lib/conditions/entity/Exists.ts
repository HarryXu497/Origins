import Condition from "../Condition";

class ExistsCondition extends Condition {
    private readonly type = 'origins:exists';
}

export default ExistsCondition;