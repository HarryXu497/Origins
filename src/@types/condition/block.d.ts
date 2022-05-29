import AdjacentCondition from '../../conditions/block/Adjacent';
import BlockCondition from '../../conditions/block/Block';
import AttachableCondition from '../../conditions/block/Attachable';
import BlastResistanceCondition from '../../conditions/block/BlastResistance';
import ExposedToSkyCondition from '../../conditions/block/ExposedToSky';
import FluidCondition from '../../conditions/block/Fluid';
import { FluidConditionType } from './fluid';
import LightBlockingCondition from '../../conditions/block/LightBlocking';
import LightLevelCondition from '../../conditions/block/LightLevel';
import MaterialCondition from '../../conditions/block/Material';
import MovementBlockingCondition from '../../conditions/block/MovementBlocking';
import NBTCondition from '../../conditions/block/NBT';
import SlipperinessCondition from '../../conditions/block/Slipperiness';
import WaterLoggableCondition from '../../conditions/block/WaterLoggable';

export type BlockConditionType = 
    AdjacentCondition |
    AttachableCondition |
    BlastResistanceCondition |
    BlockCondition |
    ExposedToSkyCondition |
    FluidCondition |
    FluidConditionType |
    LightBlockingCondition |
    LightLevelCondition |
    MaterialCondition |
    MovementBlockingCondition |
    NBTCondition |
    SlipperinessCondition |
    WaterLoggableCondition;