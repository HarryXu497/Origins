class CategoryCondition {
    public readonly type = 'origins:category';
    public category: string;

    constructor(category: string) {
        this.category = category;
    }

    setCategory(value: string) {
        this.category = value;
        return this;
    }
}


export default CategoryCondition;