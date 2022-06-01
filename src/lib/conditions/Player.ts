import { AbilityConditionFactory } from "./entity/Ability";
import { AdvancementConditionFactory } from './entity/Advancement';
import { AirConditionFactory } from "./entity/Air";
import { AttributeConditionFactory } from './entity/Attribute';
import { BiomeConditionFactory } from './Biome';
import BlockCollisionCondition from './entity/BlockCollision';
import { BrightnessConditionFactory } from "./entity/Brightness";
import CollidedHorizontallyCondition from './entity/CollidedHorizontally';
import { CommandConditionFactory } from './entity/Command';
import CreativeFlyingCondition from "./entity/CreativeFlying";
import ClimbingCondition from './entity/Climbing';
import DaytimeCondition from "./entity/Daytime";
import { DimensionConditionFactory } from "./entity/Dimension";
import { ElytraFlightPossibleConditionFactory } from './entity/ElytraFlightPossible';
import { EnchantmentConditionFactory } from "./entity/Enchantment";
import { EntityGroupConditionFactory } from "./entity/EntityGroup";
import { EntityTypeConditionFactory } from "./entity/EntityType";
import EquippedItemCondition from './entity/EquippedItem';
import ExistsCondition from './entity/Exists';
import ExposedToSkyCondition from "./entity/ExposedToSky";
import ExposedToSunCondition from "./entity/ExposedToSun";
import { FallDistanceConditionFactory } from './entity/FallDistance';
import FallFlyingCondition from './entity/FallFlying';
import { FoodLevelConditionFactory } from "./entity/FoodLevel";
import { GamemodeConditionFactory } from './entity/Gamemode';
import InRainCondition from "./entity/InRain";
import { EntityTagConditionFactory } from './entity/InTag';
import InvisibleCondition from './entity/Invisible';
import LivingCondition from './entity/Living';
import MovingCondition from './entity/Moving';
import OnBlockCondition from './entity/OnBlock';
import { BlockConditionType } from '../@types/condition/block';
import OnFireCondition from "./entity/OnFire";
import { OriginConditionFactory } from './entity/Origin';
import PowerActiveCondition from './entity/PowerActive';
import PowerTypeCondition from './entity/PowerType';
import PowerCondition from './entity/Power';
import HealthConditionFactory from "./Health";
import { SaturationLevelConditionFactory } from './entity/SaturationLevel';
import SneakingCondition from './entity/Sneaking';
import SubmergedInCondition from './entity/SubmergedIn';
import SwimmingCondition from "./entity/Swimming";
import { TimeOfDayConditionFactory } from './entity/TimeOfDay';
import UsingEffectiveToolCondition from './entity/UsingEffectiveTool';
import UsingItemCondition from './entity/UsingItem';
import XPConditonFactory from "./XP";

class PlayerConditionalFactory {
    abilities() {
        return new AbilityConditionFactory();
    }

    advancements() {
        return new AdvancementConditionFactory();
    }

    air() {
        return new AirConditionFactory();
    }

    attribute(attribute: string) {
        return new AttributeConditionFactory(attribute);
    }

    biome() {
        return new BiomeConditionFactory();
    }

    blockCollision() {
        return new BlockCollisionCondition();
    }

    brightness() {
        return new BrightnessConditionFactory();
    }

    isClimbing() {
        return new ClimbingCondition();
    }

    isCollidingHorizontally() {
        return new CollidedHorizontallyCondition();
    }
    
    command(command: string) {
        return new CommandConditionFactory(command)
    }

    isCreativeFlying() {
        return new CreativeFlyingCondition();
    }

    isDaytime() {
        return new DaytimeCondition()
    }

    dimension() {
        return new DimensionConditionFactory();
    }

    elytra() {
        return new ElytraFlightPossibleConditionFactory();
    }

    enchantment(enchantment: string) {
        return new EnchantmentConditionFactory(enchantment);
    }

    entityGroup() {
        return new EntityGroupConditionFactory();
    }

    entityType() {
        return new EntityTypeConditionFactory();
    }

    equippedItem(slot: 'mainhand' | 'offhand' | 'head' | 'chest' | 'legs' | 'feet') {
        return new EquippedItemCondition(slot);
    }

    exists() {
        return new ExistsCondition();
    }

    isExposedToSky() {
        return new ExposedToSkyCondition()
    }

    isExposedToSun() {
        return new ExposedToSunCondition()
    }

    distanceFallen() {
        return new FallDistanceConditionFactory();
    }

    isFallFlying() {
        return new FallFlyingCondition();
    }

    foodLevel() {
        return new FoodLevelConditionFactory();
    }

    gamemode() {
        return new GamemodeConditionFactory();
    }

    health() {
        return new HealthConditionFactory();
    }

    isInRain() {
        return new InRainCondition();
    }

    entityTag() {
        return new EntityTagConditionFactory();
    }

    isInvisible() {
        return new InvisibleCondition()
    }

    isLiving() {
        return new LivingCondition();
    }

    isMoving() {
        return new MovingCondition();
    }

    onBlock(condition?: BlockConditionType) {
        return new OnBlockCondition(condition);
    }

    isOnFire() {
        return new OnFireCondition()
    }

    origin() {
        return new OriginConditionFactory();
    }

    powerActive(power: string) {
        return new PowerActiveCondition(power);
    }

    hasPowerType(power: string) {
        return new PowerTypeCondition(power);
    }

    hasPower(power: string, source?: string) {
        return new PowerCondition(power, source);
    }

    saturation() {
        return new SaturationLevelConditionFactory();
    }

    isSneaking() {
        return new SneakingCondition();
    }

    isSubmergedIn(fluid: string) {
        return new SubmergedInCondition(fluid);
    }

    isSwimming() {
        return new SwimmingCondition();
    }

    timeOfDay() {
        return new TimeOfDayConditionFactory();
    }

    isUsingEffectiveTool() {
        return new UsingEffectiveToolCondition();
    }

    isUsingItem() {
        return new UsingItemCondition()
    }

    xp() {
        return new XPConditonFactory()
    }
}

export default function player() {
    return new PlayerConditionalFactory();
}