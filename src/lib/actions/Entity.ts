import addVelocity from "./entity/AddVelocity";
import addXp from "./entity/AddXP";
import applyEffect from './entity/ApplyEffect';
import blockActionAtEntity from "./entity/BlockActionAt";

class EntityActions {
    public static readonly addVelocity = addVelocity;
    public static readonly addXp = addXp;
    public static readonly applyEffect = applyEffect;
    public static readonly blockActionAtEntity = blockActionAtEntity;
}

export default EntityActions;