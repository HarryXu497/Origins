import Condition from "../Condition";
class CreativeFlyingCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:creative_flying';
    }
}
export default CreativeFlyingCondition;
