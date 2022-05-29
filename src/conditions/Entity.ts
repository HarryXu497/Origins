import { AirConditionFactory } from "./entity/Air";
import { BiomeConditionFactory } from "./entity/Biome";
import { BrightnessConditionFactory } from './entity/Brightness';

import CollidedHorizontallyCondition from "./entity/CollidedHorizontally";
import { CommandConditionFactory } from "./entity/Command";
import ClimbingCondition from './entity/Climbing';
import CreativeFlyingCondition from './entity/CreativeFlying';
import DaytimeCondition from "./entity/Daytime";
import { DimensionConditionFactory } from './entity/Dimension';
import { ElytraFlightPossibleConditionFactory } from "./entity/ElytraFlightPossible";
import { enchantment, EnchantmentConditionFactory } from './entity/Enchantment';
import { EntityGroupConditionFactory } from "./entity/EntityGroup";
import { EntityTypeConditionFactory } from "./entity/EntityType";
import EquippedItemCondition from "./entity/EquippedItem";
import ExistsCondition from "./entity/Exists";
import ExposedToSkyCondition from "./entity/ExposedToSky";
import ExposedToSunCondition from "./entity/ExposedToSun";
import { FallDistanceConditionFactory } from "./entity/FallDistance";
import FallFlyingCondition from "./entity/FallFlying";
import { FoodLevelConditionFactory } from "./entity/FoodLevel";

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
}

export function entity() {
    return new EntityConditionalsFactory();
}