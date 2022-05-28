import Condition from "../Condition";
class CategoryCondition extends Condition {
    constructor(category) {
        super();
        this.type = 'origins:category';
        this.category = category;
    }
    setCategory(value) {
        this.category = value;
        return this;
    }
}
export default CategoryCondition;
