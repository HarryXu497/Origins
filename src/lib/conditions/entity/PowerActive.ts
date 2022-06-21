import Condition from "../Condition";

class PowerActiveCondition extends Condition {
    private readonly type = 'origins:power_active';

    public power: string;

    constructor(power?: string) {
        super();
        this.power = power;
    }

    setPower(power: string) {
        this.power = power;
        return this;
    }
}

export default PowerActiveCondition;