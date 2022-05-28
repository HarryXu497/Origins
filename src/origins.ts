import * as fs from 'fs';
import Power from './powers/power';


class Origin {
    // Constants
    public static readonly FIRE_IMMUNITY = "origins:fire_immunity";
    public static readonly ELYTRA = "origins:elytra";
    public static readonly THROW_ENDER_PEARL = "origins:throw_ender_pearl";
    public static readonly FRESH_AIR = "origins:fresh_air";




    public name: string;
    public description: string;
    public powers: string[];
    public icon: string;
    public unchoosable: boolean;
    public order: number;
    public impact: number;
    public upgrades: string[];
    public loading_priority: number;

    constructor(name: string, description: string = "") {
        this.name = name;
        this.description = description;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setPowers(powers: (string | Power)[]) {
        this.powers = powers.map(value => {
            if (value instanceof Power) {
                return value.id;
            }

            return value;
        });
        return this;
    }

    setIcon(icon: string) {
        this.icon = icon;
        return this;
    }

    setUnchoosable(unchoosable: boolean) {
        this.unchoosable = unchoosable;
        return this;
    }

    setOrder(order: number) {
        this.order = order;
        return this;
    }

    setImpact(impact: number) {
        this.impact = impact;
        return this;
    }

    setUpgrades(upgrades: string[]) {
        this.upgrades = upgrades;
        return this;
    }

    setLoadingPriority(priority: number) {
        this.loading_priority = priority;
        return this;
    }

    writeToFile(fileName: string) {
        fs.writeFile(fileName, JSON.stringify(this, null, 2), (err) => {
            if (err) {
                throw err;
            }
            console.log("JSON data is saved.");
        }) 
    }
     
}


export default Origin;