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
import EntityTypeCondition from '../../conditions/entity/EntityType';
import EquippedItemCondition from '../../conditions/entity/EquippedItem';
import ExposedToSunCondition from '../../conditions/entity/ExposedToSun';
import ExposedToSkyCondition from '../../conditions/entity/ExposedToSky';
import FallDistanceCondition from '../../conditions/entity/FallDistance';
import FallFlyingCondition from '../../conditions/entity/FallFlying';
import FoodLevelCondition from '../../conditions/entity/FoodLevel';
import GamemodeCondition from '../../conditions/entity/Gamemode';
import HealthCondition from '../../conditions/entity/Health';
import InRainCondition from '../../conditions/entity/InRain';
import Condition from '../../conditions/Condition';
import InvisibleCondition from '../../conditions/entity/Invisible';
import LivingCondition from '../../conditions/entity/Living';

export type EntityConditionType = 
    Condition |
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
    EntityGroupCondition |
    EntityTypeCondition |
    EquippedItemCondition |
    ExposedToSkyCondition |
    ExposedToSunCondition |
    FallDistanceCondition |
    FallFlyingCondition |
    FoodLevelCondition |
    GamemodeCondition |
    HealthCondition |
    InRainCondition |
    InvisibleCondition |
    LivingCondition;
    
    

