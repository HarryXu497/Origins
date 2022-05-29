import { FluidConditionType } from '../../@types/condition/fluid';
import EmptyCondition from '../fluid/Empty';
import InTagCondition from '../fluid/InTag';
import StillCondition from '../fluid/Still';

class FluidCondition {
    public readonly type = 'origins:fluid';
    public fluid_condition: FluidConditionType;

    constructor(condition?: FluidConditionType) {
        this.fluid_condition = condition;
    }

    setCondition(condition: FluidConditionType) {
        this.fluid_condition = condition;
    }
}

export class FluidConditionFactory {
    private readonly instance: FluidCondition;

    constructor() {
        this.instance = new FluidCondition();
    }

    isStill() {
        this.instance.fluid_condition = new StillCondition();
        return this.instance;
    }

    is(tag: string) {
        this.instance.fluid_condition = new InTagCondition(tag);
        return this.instance;
    }

    isEmpty() {
        this.instance.fluid_condition = new EmptyCondition();
        return this.instance;
    }
}

export default FluidCondition;
export function fluid() {
    return new FluidConditionFactory();
}