import { EntityConditionType } from "./entity";
import { BiomeConditionTypes } from './biomes';
import { ItemConditionType } from './item';

export type ConditionType = EntityConditionType | BiomeConditionTypes | ItemConditionType;