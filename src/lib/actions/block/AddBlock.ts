export class AddBlockAction {
    public readonly type = 'origins:add_block';
    public block: string;

    constructor(blockToAdd: string) {
        this.block = blockToAdd;
    }
}

interface AddBlockObject {
    blockToAdd: string
}

export default function addBlock({ blockToAdd }: AddBlockObject) {
    return new AddBlockAction(blockToAdd);   
}
