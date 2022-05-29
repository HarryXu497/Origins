import { BiomeConditionTypes } from "../../@types/condition/biomes";
import CategoryCondition from '../biome/Category';
import HighHumidityCondition from "../biome/HighHumidity";
import { PrecipitationConditionFactory } from '../biome/Precipitation';
import { TemperatureConditionFactory } from '../biome/Temperature';
import Condition from "../Condition";

class BiomeCondition extends Condition {
    public readonly type = 'origins:biome';
    public biome?: string;
    public biomes?: string[];
    public condition?: BiomeConditionTypes;

    constructor(biome?: string | string[]) {
        super();
        if (typeof biome === 'string') {
            this.biome = biome;
            return;
        }
        else {
            this.biomes = biome;
            return;
        }
    }

    setBiome(biome: string) {
        this.biome = biome;
        return this;
    }

    setBiomes(biomes: string[]) {
        this.biomes = biomes;
        return this;
    }

    setCondition(condition: BiomeConditionTypes) {
        this.condition = condition;
        return this;
    }
}

export class BiomeConditionFactory {
    private readonly instance: BiomeCondition;

    constructor(biome?: string | string[]) {
        this.instance = new BiomeCondition(biome);
    }

    is(...biomes: string[]) {
        if (biome.length === 1) {
            this.instance.biome = biomes[0];
        }
        if (biome.length > 1) {
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

export default BiomeCondition;
export function biome() {
    return new BiomeConditionFactory();
}