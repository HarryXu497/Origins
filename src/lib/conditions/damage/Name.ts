import Condition from "../Condition";

class NameCondition extends Condition {
    private readonly type = 'origins:name';

    public name: string;

    constructor(name?: string) {
        super();
        this.name = name;
    }

    setName(name: string) {
        this.name = name;
    }
}

export default NameCondition;