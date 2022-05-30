import { player } from './conditions/Player.js';
import Origin from './origins.js';
import Burn from './powers/regular/Burn';
import { block } from './conditions/Block';
import { fluid } from './conditions/Fluid';
import { entity } from './conditions/Entity';
import { item } from './conditions/Item';





const origin = new Origin("Sfan")
const power = new Burn("custom", "boom", "power");

power
    .setBurnDuration(10)
    .setInterval(120)
    .setDescription("Burns enemies with Sfan power.")
    .setCondition( 
        player().xp().levels().isGreaterThanOrEqualTo(10)
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

