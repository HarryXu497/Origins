import { AddBlockAction } from '../../actions/block/AddBlock';
import { BonemealAction } from '../../actions/block/Bonemeal';
import { ExecuteCommandAction } from '../../actions/block/ExecuteCommand';
import { ExplodeAction } from '../../actions/block/Explode';

export type BlockActionTypes = AddBlockAction | BonemealAction | ExecuteCommandAction | ExplodeAction;