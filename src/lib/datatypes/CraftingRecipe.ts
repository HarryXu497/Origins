type CraftingRecipeType = 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless';

interface Result {
    item: string;
    count: number;
}



class CraftingRecipe {
    id: string;
    type: CraftingRecipeType
    result: Result

    constructor(id: string, type: CraftingRecipeType, result: Result) {
        this.id = id;
        this.type = type;
        this.result = result;
    }
}


export default CraftingRecipe;