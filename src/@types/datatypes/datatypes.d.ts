import { EntityConditionType } from '../actiontypes/entity';
// Types
export type ModifierOperation = 'addition' | 'multiply_base' | 'multiply_total';
export type Comparison = '<' | '<=' | '>' | '>=' | '==' | '!=';
export type ParticleEffect = string | ParticleEffectObject;
export type Keybinding = 
    'key.origins.primary_active' | 
    'key.origins.secondary_active' | 
    'key.origins.view_origin' |
    'key.sprint' | 
    'key.forward' |
    'key.left' |
    'key.back' |
    'key.right' | 
    'key.jump' |
    'key.inventory' |
    'key.drop' |
    'key.swapOffhand' |
    'key.chat' |
    'key.sneak' |
    'key.playerlist' |
    'key.attack' |
    'key.use' | 
    'key.pickItem' |
    'key.command' |
    'key.screenshot' | 
    'key.togglePerspective' | 
    'key.smoothCamera' |
    'key.fullscreen' |
    'key.spectatorOutlines' |
    'key.hotbar.1' |
    'key.hotbar.2' |
    'key.hotbar.3' |
    'key.hotbar.4' |
    'key.hotbar.5' |
    'key.hotbar.6' |
    'key.hotbar.7' |
    'key.hotbar.8' |
    'key.hotbar.9' |
    'key.saveToolbarActivator' |
    'key.loadToolbarActivator' |
    'key.advancements'

// Interfaces
export interface AttributeModifier {
    operator: ModifierOperation;
    value: number;
    name: string;
}

export interface AttributedAttributeModifier {
    atttribute: string;
    operation: ModifierOperation;
    value: number;
    name: string;
}

export interface Badge {
    sprite: string;
    text: string;
}

export interface CraftingRecipe {
    type: 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless';
    id: string;
    result: {
        item: string;
        count: number;
    }
    ingredients?: (Ingredient | Ingredient[])[];
}

export interface CraftingRecipeUnshaped extends CraftingRecipe {
    type: 'minecraft:crafting_shapeless';

    ingredients?: (Ingredient | Ingredient[])[];
}

export interface CraftingRecipeShaped extends CraftingRecipe {
    type: 'minecraft:crafting_shaped'

    pattern: string[];
    key: {
        [key: string]: Ingredient;
    }
}

export interface DamageSource {
    name: string;
    bypasses_armour?: boolean;
    fire?: boolean;
    unblockable?: boolean;
    magic?: boolean;
    out_of_world?: boolean;
}

export interface HudRender {
    should_render?: boolean;
    sprite_location?: string;
    bar_index?: number;
    condition?: EntityConditionType;
    inverted?: boolean;
}

export interface Ingredient {
    item?: string;
    tag?: string;
}

export interface ItemStack {
    item: string;
    amount?: number;
    tag?: string;
}

export interface Key {
    key: Keybinding;
    continous?: boolean;
}

interface ParticleEffectObject {
    type: string;
    params: string;
}

export interface PositionedItemStack extends ItemStack {
    slot: number;
}

export interface StatusEffectInstance {
    effect: string;
    duration?: number;
    amplifier?: number;
    is_ambient?: boolean;
    show_particles?: boolean;
    show_icon?: boolean;
}

export interface Vector {
    x?: number;
    y?: number;
    z?: number;
}
