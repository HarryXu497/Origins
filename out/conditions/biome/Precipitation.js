import Condition from "../Condition";
class PrecipitationCondition extends Condition {
    constructor(precipitation) {
        super();
        this.type = 'origins:precipitation';
        this.precipitation = precipitation;
    }
    setPrecipitation(precipitation) {
        this.precipitation = precipitation;
    }
}
export class PrecipitationConditionFactory {
    constructor(precipitation = 'none') {
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
