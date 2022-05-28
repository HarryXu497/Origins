class AttributeCondition extends Condition {
    public readonly type = 'origins:block_collision';
    public offset_x: number;
    public offset_y: number;
    public offset_z: number;

    constructor(offset_x: number, offset_y: number, offset_z: number) {
        super();
        this.offset_x = offset_x;
        this.offset_y = offset_y;
        this.offset_z = offset_z;
    }
}