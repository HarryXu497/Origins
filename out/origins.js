import * as fs from 'fs';
import Power from './powers/power';
class Origin {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setPowers(powers) {
        this.powers = powers.map(value => {
            if (value instanceof Power) {
                return value.id;
            }
            return value;
        });
        return this;
    }
    setIcon(icon) {
        this.icon = icon;
        return this;
    }
    setUnchoosable(unchoosable) {
        this.unchoosable = unchoosable;
        return this;
    }
    setOrder(order) {
        this.order = order;
        return this;
    }
    setImpact(impact) {
        this.impact = impact;
        return this;
    }
    setUpgrades(upgrades) {
        this.upgrades = upgrades;
        return this;
    }
    setLoadingPriority(priority) {
        this.loading_priority = priority;
        return this;
    }
    writeToFile(fileName) {
        fs.writeFile(fileName, JSON.stringify(this, null, 2), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        });
    }
}
// Constants
Origin.FIRE_IMMUNITY = "origins:fire_immunity";
Origin.ELYTRA = "origins:elytra";
Origin.THROW_ENDER_PEARL = "origins:throw_ender_pearl";
Origin.FRESH_AIR = "origins:fresh_air";
export default Origin;
