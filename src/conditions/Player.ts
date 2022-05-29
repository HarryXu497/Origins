import { AbilityConditionFactory } from "./entity/Ability";
import { AdvancementConditionFactory } from './entity/Advancement';
import { AirConditionFactory } from "./entity/Air";
import { AttributeConditionFactory } from './entity/Attribute';
import { BiomeConditionFactory } from './entity/Biome';
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

class PlayerConditionalsFactory {
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
}

export function player() {
    return new PlayerConditionalsFactory();
}