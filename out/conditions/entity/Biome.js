import CategoryCondition from '../biome/Category';
import HighHumidityCondition from "../biome/HighHumidity";
import { PrecipitationConditionFactory } from '../biome/Precipitation';
import { TemperatureConditionFactory } from '../biome/Temperature';
import Condition from "../Condition";
class BiomeCondition extends Condition {
    constructor(biome) {
        super();
        this.type = 'origins:biome';
        if (typeof biome === 'string') {
            this.biome = biome;
            return;
        }
        else {
            this.biomes = biome;
            return;
        }
    }
    setBiome(biome) {
        this.biome = biome;
        return this;
    }
    setBiomes(biomes) {
        this.biomes = biomes;
        return this;
    }
    setCondition(condition) {
        this.condition = condition;
        return this;
    }
}
class BiomeFactory {
    constructor(biome) {
        this.instance = new BiomeCondition(biome);
    }
    mustBe(...biomes) {
        if (biome.length === 1) {
            this.instance.biome = biomes[0];
        }
        if (biome.length > 1) {
            this.instance.biomes = biomes;
        }
        return this.instance;
    }
    mustBeInCategory(category) {
        this.instance.condition = new CategoryCondition(category);
        return this.instance;
    }
    mustBeHighHumidity() {
        this.instance.condition = new HighHumidityCondition();
        return this.instance;
    }
    precipitation() {
        return new PrecipitationConditionFactory();
    }
    temperature() {
        return new TemperatureConditionFactory();
    }
}
export default BiomeCondition;
export function biome() {
    return new BiomeFactory();
}
