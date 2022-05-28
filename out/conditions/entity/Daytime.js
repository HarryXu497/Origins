import Condition from "../Condition";
class DaytimeCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:daytime';
    }
}
export default DaytimeCondition;
