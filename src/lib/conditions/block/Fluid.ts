import { FluidConditionType } from '../../@types/condition/fluid';


class FluidCondition {
    public readonly type = 'origins:fluid';
    public fluid_condition: FluidConditionType;

    constructor(condition?: FluidConditionType) {
        this.fluid_condition = condition;
    }

    setCondition(condition: FluidConditionType) {
        this.fluid_condition = condition;
        return this;
    }

    where(condition: FluidConditionType) {
        return this.setCondition(condition);
    }
}

export default FluidCondition;
