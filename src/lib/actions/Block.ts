import addBlock from './block/AddBlock';
import bonemeal from './block/Bonemeal';
import executeCommand from './block/ExecuteCommand';
import modifyBlockState from './block/ModifyBlockState';
import offsetAction from './block/Offset';
import setBlock from './block/SetBlock';
import explode from './block/Explode';

class BlockActions {
    public static readonly addBlock = addBlock;
    public static readonly bonemeal = bonemeal;
    public static readonly executeCommand = executeCommand;
    public static readonly explode = explode;
    public static readonly modifyBlockState = modifyBlockState
    public static readonly offsetAction = offsetAction
    public static readonly setBlock = setBlock;
}

export default BlockActions;