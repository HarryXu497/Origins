import CategoryCondition from "../../conditions/biome/Category";
import HighHumidityCondition from "../../conditions/biome/HighHumidity";
import PrecipitationCondition from "../../conditions/biome/Precipitation";
import TemperatureCondition from "../../conditions/biome/Temperature";

export type BiomeConditionTypes = CategoryCondition | HighHumidityCondition | PrecipitationCondition | TemperatureCondition;