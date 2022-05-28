import { PlayerAbilities } from '../player/player.s';
import { Comparison } from '../datatypes';
import AbilityCondition from '../../conditions/entity/Ability';
import AdvancementCondition from '../../conditions/entity/Advancement';

export type EntityConditionType = AbilityCondition | AdvancementCondition ;
