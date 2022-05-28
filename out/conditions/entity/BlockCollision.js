class AttributeCondition extends Condition {
    constructor(offset_x, offset_y, offset_z) {
        super();
        this.type = 'origins:block_collision';
        this.offset_x = offset_x;
        this.offset_y = offset_y;
        this.offset_z = offset_z;
    }
}
