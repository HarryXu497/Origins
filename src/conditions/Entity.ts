import { AirConditionFactory } from "./entity/Air";
import { BiomeConditionFactory } from "./entity/Biome";
import { BrightnessConditionFactory } from './entity/Brightness';

import CollidedHorizontallyCondition from "./entity/CollidedHorizontally";
import { CommandConditionFactory } from "./entity/Command";
import ClimbingCondition from './entity/Climbing';
import CreativeFlyingCondition from './entity/CreativeFlying';
import DaytimeCondition from "./entity/Daytime";
import { DimensionConditionFactory } from './entity/Dimension';
import { EntityGroupConditionFactory } from "./entity/EntityGroup";
import EquippedItemCondition from "./entity/EquippedItem";
import ExistsCondition from "./entity/Exists";
import ExposedToSkyCondition from "./entity/ExposedToSky";
import ExposedToSunCondition from "./entity/ExposedToSun";
import { FallDistanceConditionFactory } from "./entity/FallDistance";
import FallFlyingCondition from "./entity/FallFlying";
import InRainCondition from "./entity/InRain";
import InvisibleCondition from "./entity/Invisible";
import LivingCondition from "./entity/Living";
import MovingCondition from "./entity/Moving";
import OnBlockCondition from "./entity/OnBlock";
import OnFireCondition from "./entity/OnFire";
import PowerActiveCondition from "./entity/PowerActive";
import PowerTypeCondition from "./entity/PowerType";
import PowerCondition from "./entity/Power";
import HealthConditionFactory from "./Health";
import TamedCondition from './entity/Tamed';
import SubmergedInCondition from "./entity/SubmergedIn";
import { TimeOfDayConditionFactory } from "./entity/TimeOfDay";
import { ItemConditionType } from "../@types/condition/item";
import UsingItemCondition from "./entity/UsingItem";

class EntityConditionalsFactory {
    air() {
        return new AirConditionFactory();
    }

    biome() {
        return new BiomeConditionFactory();
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

    entityGroup() {
        return new EntityGroupConditionFactory();
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

    health() {
        return new HealthConditionFactory();
    }
    
    isInRain() {
        return new InRainCondition();
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

    onBlock() {
        return new OnBlockCondition();
    }

    isOnFire() {
        return new OnFireCondition()
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

    isTamed() {
        return new TamedCondition();
    }

    isSubmergedIn(fluid: string) {
        return new SubmergedInCondition(fluid);
    }

    timeOfDay() {
        return new TimeOfDayConditionFactory();
    }

    isUsingItem() {
        return new UsingItemCondition();
    }
}

export function entity() {
    return new EntityConditionalsFactory();
}