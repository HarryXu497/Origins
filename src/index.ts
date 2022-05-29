import Origin from './origins.js';
import Burn from './powers/regular/Burn';

import { elytra } from './conditions/entity/ElytraFlightPossible';
import { entityGroup } from './conditions/entity/EntityGroup';
import { entityType } from './conditions/entity/EntityType';

const origin = new Origin("Sfan")
const power = new Burn("custom", "boom", "power");

power
    .setBurnDuration(10)
    .setInterval(120)
    .setDescription("Burns enemies with Sfan power.")
    .setCondition(
        entityType().mustBe("minecraft:creeper")
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

