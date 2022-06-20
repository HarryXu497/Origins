class CraftingTableAction {
    public readonly type = 'origins:crafting_table';
}

/**
 * @description The formatted object representing the entity action.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/crafting_table/ External Documentation}.
 */
export default function showCraftingTable() {
    return new CraftingTableAction();
}