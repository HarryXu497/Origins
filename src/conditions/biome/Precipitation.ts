import Condition from "../Condition";

class PrecipitationCondition extends Condition {
    public readonly type = 'origins:precipitation';
    public precipitation: 'none' | 'rain' | 'snow';

    constructor(precipitation: 'none' | 'rain' | 'snow') {
        super();
        this.precipitation = precipitation;
    }

    setPrecipitation(precipitation: 'none' | 'rain' | 'snow') {
        this.precipitation = precipitation
    }
}

export class PrecipitationConditionFactory {
    private readonly instance: PrecipitationCondition;

    constructor(precipitation: 'none' | 'rain' | 'snow' = 'none') {
        this.instance = new PrecipitationCondition(precipitation);
    }

    isRaining() {
        this.instance.precipitation = 'rain';
        return this.instance;
    }

    isSnowing() {
        this.instance.precipitation = 'snow';
        return this.instance;
    }

    isNotPrecipitating() {
        this.instance.precipitation = 'none';
        return this.instance;
    }
}


export default PrecipitationCondition;
export function biome() {
    return new PrecipitationConditionFactory();
}