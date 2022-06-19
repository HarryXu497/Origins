import addBlock from './block/AddBlock';
import bonemeal from './block/Bonemeal';
import executeCommand from './block/ExecuteCommand';
import explodeBlock from './block/Explode';
import modifyBlockState from './block/ModifyBlockState';
import offsetAction from './block/Offset';
import setBlock from './block/SetBlock';

class BlockActions {
    public static readonly addBlock = addBlock;
    public static readonly bonemeal = bonemeal;
    public static readonly executeCommand = executeCommand;
    public static readonly explodeBlock = explodeBlock;
    public static readonly modifyBlockState = modifyBlockState
    public static readonly offsetAction = offsetAction
    public static readonly setBlock = setBlock;
}

export default BlockActions;