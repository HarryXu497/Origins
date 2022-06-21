import Condition from "../Condition";

class PowerTypeCondition extends Condition {
    private readonly type = 'origins:power_type';

    public power_type: string;

    constructor(power?: string) {
        super();
        this.power_type = power;
    }

    setPower(power: string) {
        this.power_type = power;
        return this;
    }
}

export default PowerTypeCondition;