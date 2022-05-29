import { Ingredient } from "../../@types/datatypes/datatypes";
import Condition from "../Condition";

class IngredientCondition extends Condition {
    public readonly type = 'origins:ingredient';
    public ingredient: Ingredient | Ingredient[];

    constructor(ingredient?: Ingredient | Ingredient[]) {
        super();
        this.ingredient = ingredient;
    }

    setIngredient(ingredient: Ingredient | Ingredient[]) {
        this.ingredient = ingredient;
    }
}

export class IngredientConditionFactory {
    private readonly instance: IngredientCondition;
    
    constructor() {
        this.instance = new IngredientCondition();
    }

    mustBe(item: string) {
        this.instance.ingredient = { item };
        return this.instance;
    }

    mustBeIn(tag: string) {
        this.instance.ingredient = { tag };
        return this.instance;
    }

    mustBeInEnum(...ingredients: Ingredient[]) {
        this.instance.ingredient = ingredients;
        return this.instance;
    }
}


export default IngredientCondition;