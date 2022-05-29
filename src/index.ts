import { player } from './conditions/Player.js';
import Origin from './origins.js';
import Burn from './powers/regular/Burn';
import { amount } from './conditions/item/Amount';
import { armorValue } from './conditions/item/ArmorValue';
import { item } from './conditions/Item';
import { ingredient } from './conditions/Ingredient';




const origin = new Origin("Sfan")
const power = new Burn("custom", "boom", "power");

power
    .setBurnDuration(10)
    .setInterval(120)
    .setDescription("Burns enemies with Sfan power.")
    .if( 
        player().foodLevel().mustBeGreaterThanOrEqualTo(12)
    )


origin
    .setDescription("The new origin based on Sfan.")
    .setIcon("minecraft:slime_ball")
    .setLoadingPriority(24)
    .setPowers([
        Origin.ELYTRA,
        Origin.FIRE_IMMUNITY,
        Origin.THROW_ENDER_PEARL,
        Origin.FRESH_AIR,
        power,
    ])

power.writeToFile();
origin.writeToFile("index.json")

