import Origin from './origins.js';
import Power from './powers/power';

const origin = new Origin("Sfan")
const power = new Power("custom", "boom", "power");


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
