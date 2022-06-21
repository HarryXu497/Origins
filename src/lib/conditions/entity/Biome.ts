import { BiomeConditionTypes } from "../../@types/condition/biomes";
import Condition from "../Condition";

class BiomeCondition extends Condition {
    private readonly type = 'origins:biome';
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

export default BiomeCondition;