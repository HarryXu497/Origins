import Condition from '../Condition';
class DimensionCondition extends Condition {
    constructor(dimension) {
        super();
        this.type = 'origins:dimension';
        this.dimension = dimension;
    }
    setDimension(dimension) {
        this.dimension = dimension;
    }
}
class DimensionConditionFactory {
    constructor() {
        this.instance = new DimensionCondition();
    }
    mustBe(dimension) {
        this.instance.dimension = dimension;
    }
    mustBeOverworld() {
        this.instance.dimension = 'minecraft:overworld';
        return this.instance;
    }
    mustBeNether() {
        this.instance.dimension = 'minecraft:the_nether';
        return this.instance;
    }
    mustBeEnd() {
        this.instance.dimension = 'minecraft:the_end';
        return this.instance;
    }
}
export default DimensionCondition;
export function dimension() {
    return new DimensionConditionFactory();
}
