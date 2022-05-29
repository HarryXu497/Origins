import Condition from '../Condition';
class DimensionCondition extends Condition {
    public readonly type = 'origins:dimension';
    public dimension: string;

    constructor(dimension?: string) {
        super();
        this.dimension = dimension;
    }

    setDimension(dimension: string) {
        this.dimension = dimension;
    }
}

export class DimensionConditionFactory {
    private readonly instance: DimensionCondition;

    constructor() {
        this.instance = new DimensionCondition();
    }

    is(dimension: string) {
        this.instance.dimension = dimension;
    }

    isOverworld() {
        this.instance.dimension = 'minecraft:overworld';
        return this.instance;
    }

    isNether() {
        this.instance.dimension = 'minecraft:the_nether';
        return this.instance;
    }

    isEnd() {
        this.instance.dimension = 'minecraft:the_end';
        return this.instance;
    }
}


export default DimensionCondition;
export function dimension() {
    return new DimensionConditionFactory();
}