import { AdjacentConditionFactory } from './block/Adjacent';
import { BlockConditionType } from '../@types/condition/block';
import BlockCondition from './block/Block';
import { BlastResistanceConditionFactory } from './block/BlastResistance';
import ExposedToSkyCondition from './block/ExposedToSky';
import { FluidConditionType } from '../@types/condition/fluid';
import FluidCondition from './block/Fluid';
import LightBlockingCondition from './block/LightBlocking';
import { LightLevelConditionFactory } from './block/LightLevel';
import MaterialCondition from './block/Material';
import MovementBlockingCondition from './block/MovementBlocking';
import NBTCondition from './item/NBT';
import ReplacableCondition from './block/Replacable';
import { SlipperinessConditionFactory } from './block/Slipperiness';
import WaterLoggableCondition from './block/WaterLoggable';

class BlockConditionFactory {
    adjacentCountOf(condition: BlockConditionType) {
        return new AdjacentConditionFactory(condition)
    }

    blastResistance() {
        return new BlastResistanceConditionFactory();
    }

    is(block: string) {
        return new BlockCondition(block)
    }

    isExposedToSky() {
        return new ExposedToSkyCondition();
    }

    fluid(condition?: FluidConditionType) {
        return new FluidCondition(condition);
    }

    isLightBlocking() {
        return new LightBlockingCondition();
    }

    lightLevel() {
        return new LightLevelConditionFactory();
    }

    isOfMaterial(...materials: string[]) {
        return new MaterialCondition(...materials);
    }

    isMovementBlocking() {
        return new MovementBlockingCondition()
    }

    hasNBTTag(tag: string) {
        return new NBTCondition(tag); 
    }

    isReplaceable() {
        return new ReplacableCondition();
    }

    slipperiness() {
        return new SlipperinessConditionFactory();
    }

    isWaterLoggable() {
        return new WaterLoggableCondition();
    }
}


export function block() {
    return new BlockConditionFactory();
}