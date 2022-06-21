import Condition from "../Condition";

class InTagCondition extends Condition {
    private readonly type = 'origins:in_tag';
    public tag: string;

    constructor(tag?: string) {
        super();
        this.tag = tag;
    }

    setTag(tag: string) {
        this.tag = tag;
    }
}

export default InTagCondition;
