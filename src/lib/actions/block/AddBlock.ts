export class AddBlockAction {
    public readonly type = 'origins:add_block';
    public block: string;

    constructor(block: string) {
        this.block = block;
    }
}

export default function addBlock(block: string) {
    return new AddBlockAction(block);   
}
