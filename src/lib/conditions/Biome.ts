import CategoryCondition from "./biome/Category";
import HighHumidityCondition from "./biome/HighHumidity";
import { PrecipitationConditionFactory } from "./biome/Precipitation";
import { TemperatureConditionFactory } from "./biome/Temperature";
import BiomeCondition from "./entity/Biome";

export class BiomeConditionFactory {
    private readonly instance: BiomeCondition;

    constructor(biome?: string | string[]) {
        this.instance = new BiomeCondition(biome);
    }

    is(...biomes: string[]) {
        if (biomes.length === 1) {
            this.instance.biome = biomes[0];
        }
        if (biomes.length > 1) {
            this.instance.biomes = biomes;
        }
        return this.instance;
    }

    isInCategory(category: string) {
        this.instance.condition = new CategoryCondition(category);
        return this.instance;
    }

    isHighHumidity() {
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

export default function biome() {
    return new BiomeConditionFactory();
}