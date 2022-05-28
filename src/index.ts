import Origin from './origins.js';
import Burn from './powers/regular/Burn';
import { attribute } from './conditions/entity/Attribute';
import BiomeCondition from './conditions/entity/Biome';
import { biomeTemperature } from './conditions/biome/Temperature';

const origin = new Origin("Sfan")
const power = new Burn("custom", "boom", "power");

power
    .setBurnDuration(10)
    .setInterval(120)
    .setDescription("Burns enemies with Sfan power.")
    .setCondition(
        new BiomeCondition()
            .setCondition(
                biomeTemperature().mustBeLessThanOrEqualTo(10)
            )
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

