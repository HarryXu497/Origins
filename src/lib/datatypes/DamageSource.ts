export class DamageSource {
    private name: string;
    private bypasses_armor: boolean;
    private fire: boolean;
    private unblockable: boolean;
    private magic: boolean;
    private out_of_world: boolean;

    constructor(name: string, bypassesArmor: boolean, fire: boolean, unblockable: boolean, magic: boolean, outOfWorld: boolean) {
        this.name = name;
        this.bypasses_armor = bypassesArmor;
        this.fire = fire; 
        this.unblockable = unblockable;
        this.magic = magic;
        this.out_of_world = outOfWorld;
    }
}

interface DamageSourceObject {
    name: string;
    bypassesArmor?: boolean;
    fire?: boolean;
    unblockable?: boolean;
    magic?: boolean;
    outOfWorld?: boolean;
}

/**
 * @description Creates a new **damage source object**, an object used to specify how to deal damage to an entity.
 * @param {string} name - The name of the damage source. Controls death message as well as other interactions. Consider the {@link https://origins.readthedocs.io/en/latest/misc/extras/damage_source_names/ List of Damage Source Names} when picking a name.
 * @param {boolean} [bypassesArmor=false] - When true, armor values are not taken into account when calculating the actual damage amount taken.
 * @param {boolean} [fire=false] - When true, the damage will be considered fire damage.
 * @param {boolean} [unblockable=false] - When true, the damage will be unblockable (not reduced by resistance effects or protection enchantments).
 * @param {boolean} [magic=false] - When true, the damage will be considered magic damage.
 * @param {boolean} [outOfWorld=false] - When true, the damage will be considered "out of world" damage, i.e. damage from falling into the void.
 * @returns An object representing the damage source data type.
 * @link {@link https://origins.readthedocs.io/en/latest/types/data_types/damage_source/ External Documentation}.
 */
export default function damageSource({ name, bypassesArmor = false, fire = false, unblockable = false, magic = false, outOfWorld = false }: DamageSourceObject) {
    return new DamageSource(name, bypassesArmor, fire, unblockable, magic, outOfWorld);
}

