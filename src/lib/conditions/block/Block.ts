class BlockCondition {
    public readonly type = 'origins:block';
    public block: string;

    constructor(block?: string) {
        this.block = block;
    }

    setBlock(block: string) {
        this.block = block;
        return this;
    }
}

export default BlockCondition;