import AmountCondition from '../../conditions/item/Amount';
import ArmorValueCondition from '../../conditions/item/ArmorValue';
import EmptyCondition from '../../conditions/item/Empty';
import EnchantmentCondition from '../../conditions/item/Enchantment';
import FireproofCondition from '../../conditions/item/Fireproof';
import FoodCondition from '../../conditions/item/Food';
import HarvestLevelCondition from '../../conditions/item/HarvestLevel';
import IngredientCondition from '../../conditions/item/Ingredient';
import MeatCondition from '../../conditions/item/Meat';
import NBTCondition from '../../conditions/item/NBT';
import SmeltableCondition from '../../conditions/item/Smeltable';

export type ItemConditionType = 
    AmountCondition |
    ArmorValueCondition |
    EmptyCondition |
    EnchantmentCondition |
    FireproofCondition |
    FoodCondition |
    HarvestLevelCondition |
    IngredientCondition |
    MeatCondition |
    NBTCondition |
    SmeltableCondition;