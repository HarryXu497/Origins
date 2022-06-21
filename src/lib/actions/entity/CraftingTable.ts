export class CraftingTableAction {
    private readonly type = 'origins:crafting_table';
}

/**
 * @description Brings up the Crafting Table GUI as if the player has interacted with one.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/crafting_table/ External Documentation}.
 */
export default function showCraftingTable() {
    return new CraftingTableAction();
}