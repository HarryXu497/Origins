import Condition from "../Condition";

class SubmergedInCondition extends Condition {
    private readonly type = 'origins_submerged_in';

    public fluid: string;

    constructor(fluid?: string) {
        super();
        this.fluid = fluid;
    }

    setFluid(fluid: string) {
        this.fluid = fluid;
    }
}


export default SubmergedInCondition;