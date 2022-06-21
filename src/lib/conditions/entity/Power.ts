import Condition from "../Condition";

class PowerCondition extends Condition {
    private readonly type = 'origins:power';

    public power: string;
    public source: string;

    constructor(power?: string, source?: string) {
        super();
        this.power = power;
        this.source = source;
    }

    setPower(power: string) {
        this.power = power;
        return this;
    }

    setSource(source: string) {
        this.source = source;
    }
}

export default PowerCondition;