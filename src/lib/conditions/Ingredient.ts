export class Ingredient {
    public item: string;
    public tag: string;

    constructor(item?: string, tag?: string) {
        this.item = item;
        this.tag = tag;
    }

    setItem(item: string) {
        this.item = item;
    }

    setTag(tag: string) {
        this.tag = tag;
    }
}

export class IngredientFactory {
    private readonly instance: Ingredient;

    constructor() {
        this.instance = new Ingredient();
    }

    withTag(tag: string) {
        this.instance.tag = tag;
        return this.instance;
    }

    withName(name: string) {
        this.instance.item = name;
        return this.instance;
    }
}


export default function ingredient() {
    return new IngredientFactory();
}