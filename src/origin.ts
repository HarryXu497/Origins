import Origin from './lib/origin/Origin';
import Burn from './lib/powers/regular/Burn';
import power from './power';

const origin = new Origin("Sfan")


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

export default origin;