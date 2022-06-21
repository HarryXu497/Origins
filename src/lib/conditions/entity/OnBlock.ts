import { BlockConditionType } from '../../@types/condition/block';
import Condition from '../Condition';

class OnBlockCondition extends Condition {
    private readonly type = 'origins:on_block';
    public block_condition: BlockConditionType

    constructor(condition?: BlockConditionType) {
        super();
        this.block_condition = condition;
    }

    setBlockCondition(blockCondition: BlockConditionType) {
        this.block_condition = blockCondition;
        return this;
    }

    where(blockCondition: BlockConditionType) {
        return this.setBlockCondition(blockCondition);
    }
}

export default OnBlockCondition;