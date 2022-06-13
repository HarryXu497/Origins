export class SetBlockAction {
    public readonly type = 'origins:set_block';
    public block: string;

    constructor(block: string) {
        this.block = block;
    }
}

interface SetBlockObject {
    block: string;
}

export default function setBlock({ block }: SetBlockObject) {
    return new SetBlockAction(block);
}

