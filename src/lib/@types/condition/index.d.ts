import { EntityConditionType } from "./entity";
import { BiomeConditionTypes } from './biomes';
import { ItemConditionType } from './item';
import { DamageConditionType } from './damage';
import { MetaConditionType } from './meta';

export type ConditionType = EntityConditionType | BiomeConditionTypes | ItemConditionType | DamageConditionType | MetaConditionType;