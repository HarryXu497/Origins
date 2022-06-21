import addVelocity from "./entity/AddVelocity";
import addXp from "./entity/AddXP";
import applyEffect from './entity/ApplyEffect';
import blockActionAtEntity from "./entity/BlockActionAt";
import clearEffect from './entity/ClearEffect';
import showCraftingTable from './entity/CraftingTable';
import damage from './entity/Damage';
import entity from '../conditions/Entity';
import dismount from './entity/Dismount';
import emitGameEvent from './entity/EmitGameEvent';
import showEnderChest from './entity/EnderChest';
import equippedItem from './entity/EquippedItem';
import executeCommand from './entity/ExecuteCommand';
import exhaust from './entity/Exhaust';
import explode from "./entity/Explode";
import extinguish from './entity/Extinguish';

class EntityActions {
    public static readonly addVelocity = addVelocity;
    public static readonly addXp = addXp;
    public static readonly applyEffect = applyEffect;
    public static readonly blockActionAtEntity = blockActionAtEntity;
    public static readonly clearEffect = clearEffect;
    public static readonly showCraftingTable = showCraftingTable;
    public static readonly damage = damage;
    public static readonly entity = entity;
    public static readonly dismount = dismount;
    public static readonly emitGameEvent = emitGameEvent;
    public static readonly showEnderChest = showEnderChest;
    public static readonly equippedItem = equippedItem;
    public static readonly executeCommand = executeCommand;
    public static readonly exhaust = exhaust;
    public static readonly explode = explode;
    public static readonly extinguish = extinguish;
}

export default EntityActions;