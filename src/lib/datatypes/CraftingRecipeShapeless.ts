import CraftingRecipe from "./CraftingRecipe";
import { Ingredient } from "./Ingredient";

type CraftingRecipeType = 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless';

interface Result {
    item: string;
    count: number;
}


class ShapelessCraftingRecipe extends CraftingRecipe {

    ingredients: Ingredient | Ingredient[]

    constructor(id: string, type: CraftingRecipeType, result: Result) {
        super(id, type, result);
    }
}


export default CraftingRecipe;