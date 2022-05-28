import Condition from "../Condition";
class HighHumidityCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:high_humidity';
    }
}
export default HighHumidityCondition;
