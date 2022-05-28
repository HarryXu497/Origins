class BiomeCondition {
    constructor(biome) {
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
export default BiomeCondition;
