import AdjacentCondition from '../../conditions/block/Adjacent';
import BlockCondition from '../../conditions/block/Block';
import AttachableCondition from '../../conditions/block/Attachable';
import BlastResistanceCondition from '../../conditions/block/BlastResistance';
import ExposedToSkyCondition from '../../conditions/block/ExposedToSky';
import FluidCondition from '../../conditions/block/Fluid';
import { FluidConditionType } from './fluid';

export type BlockConditionType = 
    AdjacentCondition |
    AttachableCondition |
    BlastResistanceCondition |
    BlockCondition |
    ExposedToSkyCondition |
    FluidCondition |
    FluidConditionType;