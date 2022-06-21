export class EnderChestAction {
    private readonly type = 'origins:ender_chets';
}

/**
 * @description Brings up the Ender Chest GUI as if the player has interacted with one.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/ender_chest/ External Documentation}.
 */
export default function showEnderChest() {
    return new EnderChestAction();
}