import Condition from "../Condition";
class ClimbingCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:climbing';
    }
}
export default ClimbingCondition;
