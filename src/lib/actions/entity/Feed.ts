export class FeedAction {
    private readonly type = 'origins:feed';
    private food: number;
    private saturation: number;

    constructor(food: number, saturation: number) {
        this.food = food;
        this.saturation = saturation;
    }
}

interface FeedObject {
    food: number;
    saturation: number;
}

/**
 * 
 * @description Feeds the entity, filling up their hunger bar as if they had eaten a food item with the provided values. **This entity action type will only work on players.**
 * @param {number} food - The amount of food points to restore.
 * @param {number} saturation - The amount of saturation points to restore.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/feed/ External Documentation}.
 */
export default function feed({ food, saturation }: FeedObject) {
    return new FeedAction(food, saturation);
}