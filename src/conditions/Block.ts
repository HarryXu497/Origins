import { AdjacentConditionFactory } from './block/Adjacent';
import { BlockConditionType } from '../@types/condition/block';
import BlockCondition from './block/Block';
import { BlastResistanceConditionFactory } from './block/BlastResistance';
import ExposedToSkyCondition from './block/ExposedToSky';

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
}


export function block() {
    return new BlockConditionFactory();
}