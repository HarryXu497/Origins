import { AmountConditionFactory } from './item/Amount';
import { ArmorValueConditionFactory } from './item/ArmorValue';
import EmptyCondition from './item/Empty';
import { EnchantmentConditionFactory } from './item/Enchantment';
import FireproofCondition from './item/Fireproof';
import FoodCondition from './item/Food';
import { HarvestLevelConditionFactory } from './item/HarvestLevel';
import IngredientCondition, { IngredientConditionFactory } from './item/Ingredient';
import MeatCondition from './item/Meat';
import NBTCondition from './item/NBT';
import SmeltableCondition from './item/Smeltable';
class ItemConditionalsFactory {
    amount() {
        return new AmountConditionFactory();
    }

    armorValue() {
        return new ArmorValueConditionFactory();
    }

    isEmpty() {
        return new EmptyCondition();
    }

    enchantment(enchantment: string) {
        return new EnchantmentConditionFactory(enchantment);
    }

    isFireproof() {
        return new FireproofCondition();
    }

    isFood() {
        return new FoodCondition();
    }

    harvestLevel() {
        return new HarvestLevelConditionFactory();
    }

    ingredient() {
        return new IngredientConditionFactory();
    }

    meat() {
        return new MeatCondition();
    }

    nbt(nbt: string) {
        return new NBTCondition(nbt);
    }

    isSmeltable() {
        return new SmeltableCondition();
    }
}

export default function item() {
    return new ItemConditionalsFactory();
}