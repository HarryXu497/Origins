import Condition from "../Condition";

class CategoryCondition extends Condition{
    public readonly type = 'origins:category';
    public category: string;

    constructor(category: string) {
        super();
        this.category = category;
    }

    setCategory(value: string) {
        this.category = value;
        return this;
    }
}


export default CategoryCondition;