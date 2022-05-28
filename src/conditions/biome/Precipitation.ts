class PrecipitationCondition {
    public readonly type = 'origins:precipitation';
    public precipitation: 'none' | 'rain' | 'snow';

    constructor(precipitation: 'none' | 'rain' | 'snow') {
        this.precipitation = precipitation;
    }

    setPrecipitation(precipitation: 'none' | 'rain' | 'snow') {
        this.precipitation = precipitation
    }
}

class PrecipitationConditionFactory {
    private readonly instance: PrecipitationCondition;

    constructor(precipitation: 'none' | 'rain' | 'snow' = 'none') {
        this.instance = new PrecipitationCondition(precipitation);
    }

    mustBeRaining() {
        this.instance.precipitation = 'rain';
        return this.instance;
    }

    mustBeSnowing() {
        this.instance.precipitation = 'snow';
        return this.instance;
    }

    mustNotBePrecipitating() {
        this.instance.precipitation = 'none';
        return this.instance;
    }
}


export default PrecipitationCondition;
export function biome() {
    return new PrecipitationConditionFactory();
}