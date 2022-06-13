import { OffsetAction } from './../../actions/block/Offset';
import { ModifyBlockStateAction } from './../../actions/block/ModifyBlockState';
import { AddBlockAction } from '../../actions/block/AddBlock';
import { BonemealAction } from '../../actions/block/Bonemeal';
import { ExecuteCommandAction } from '../../actions/block/ExecuteCommand';
import { ExplodeAction } from '../../actions/block/Explode';
import { SetBlockAction } from '../../actions/block/SetBlock';

export type BlockActionTypes = 
    AddBlockAction |
    BonemealAction |
    ExecuteCommandAction | 
    ExplodeAction |
    ModifyBlockStateAction | 
    SetBlockAction |
    OffsetAction;