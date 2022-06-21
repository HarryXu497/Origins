import Condition from "../Condition";

class NBTCondition extends Condition {
    private readonly type = 'origins:nbt';
    public nbt: string;

    constructor(nbt?: string) {
        super();
        this.nbt = nbt;
    }

    setNBT(nbt: string) {
        this.nbt = nbt;
    }
}

export default NBTCondition;