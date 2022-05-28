import AbilityCondition from '../../conditions/entity/Ability';
import AdvancementCondition from '../../conditions/entity/Advancement';
import AirCondition from '../../conditions/entity/Air';
import AttributeCondition from '../../conditions/entity/Attribute';
import BiomeCondition from '../../conditions/entity/Biome';
import BrightnessCondition from '../../conditions/entity/Brightness';
import ClimbingCondition from '../../conditions/entity/Climbing';
import CommandCondition from '../../conditions/entity/Command';
import CollidedHorizontallyCondition from '../../conditions/entity/CollidedHorizontally';
import CreativeFlyingCondition from '../../conditions/entity/CreativeFlying';
import DaytimeCondition from '../../conditions/entity/Daytime';
import DimensionCondition from '../../conditions/entity/Dimension';
import EnchantmentCondition from '../../conditions/entity/Enchantment';
import ElytraFlightPossibleCondition from '../../conditions/entity/ElytraFlightPossible';
import EntityGroupCondition from '../../conditions/entity/EntityGroup';

export type EntityConditionType = 
    AbilityCondition |
    AdvancementCondition |
    AirCondition |
    AttributeCondition |
    BiomeCondition |
    BrightnessCondition |
    ClimbingCondition |
    CollidedHorizontallyCondition |
    CommandCondition |
    CreativeFlyingCondition |
    DaytimeCondition |
    DimensionCondition |
    ElytraFlightPossibleCondition |
    EnchantmentCondition |
    EntityGroupCondition;
    
    

