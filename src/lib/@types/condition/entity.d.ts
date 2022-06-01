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
import OnBlockCondition from '../../conditions/entity/OnBlock';
import MovingCondition from '../../conditions/entity/Moving';
import OnFireCondition from '../../conditions/entity/OnFire';
import OriginCondition from '../../conditions/entity/Origin';
import PowerActiveCondition from '../../conditions/entity/PowerActive';
import PowerTypeCondition from '../../conditions/entity/PowerType';
import PowerCondition from '../../conditions/entity/Power';
import RelativeHealthCondition from '../../conditions/entity/RelativeHealth';
import SaturationLevelCondition from '../../conditions/entity/SaturationLevel';
import SneakingCondition from '../../conditions/entity/Sneaking';
import SprintingCondition from '../../conditions/entity/Sprinting';
import SubmergedInCondition from '../../conditions/entity/SubmergedIn';
import SwimmingCondition from '../../conditions/entity/Swimming';
import TamedCondition from '../../conditions/entity/Tamed';
import TimeOfDayCondition from '../../conditions/entity/TimeOfDay';
import UsingEffectiveToolCondition from '../../conditions/entity/UsingEffectiveTool';
import UsingItemCondition from '../../conditions/entity/UsingItem';
import XPLevelsCondition from '../../conditions/entity/XPLevels';
import XPPointsCondition from '../../conditions/entity/XPPoints';

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
    LivingCondition |
    MovingCondition |
    OnBlockCondition |
    OnFireCondition |
    OriginCondition |
    PowerActiveCondition |
    PowerTypeCondition |
    PowerCondition |
    RelativeHealthCondition |
    SaturationLevelCondition |
    SneakingCondition |
    SprintingCondition |
    SubmergedInCondition |
    SwimmingCondition |
    TamedCondition |
    TimeOfDayCondition |
    UsingEffectiveToolCondition |
    UsingItemCondition |
    XPLevelsCondition|
    XPPointsCondition;
    
    

