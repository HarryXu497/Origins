class CategoryCondition {
    constructor(category) {
        this.type = 'origins:category';
        this.category = category;
    }
    setCategory(value) {
        this.category = value;
        return this;
    }
}
export default CategoryCondition;
