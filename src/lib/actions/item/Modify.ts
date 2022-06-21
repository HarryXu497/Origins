export class ModifyAction {
    private readonly type = 'origins:modify';
    private modifier: string;

    constructor(modifier: string) {
        this.modifier = modifier;
    }
}

interface ModifyObject {
    modifier: string;
}

/**
 * 
 * @description Applies an item modifier to the item stack.
 * @param {string} modifier - The ID of an item modifier. 
 * @returns The formatted object representing the item action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/item_action_types/modify/ External Documentation}
 */
export default function modify({ modifier }: ModifyObject) {
    return new ModifyAction(modifier);
}