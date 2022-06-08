import OriginsError from '../error/OriginsError';
export class Ingredient {
    public item: string;
    public tag: string;

    constructor(item: string, tag: string) {
        this.item = item;
        this.tag = tag;
    }
}

interface IngredientObject {
    item?: string;
    tag?: string;
}


export default function ingredient({ item, tag }: IngredientObject) {
    if (!item && !tag) throw new OriginsError("either `item` or `tag` must be defined")
    return new Ingredient(item, tag)
}

