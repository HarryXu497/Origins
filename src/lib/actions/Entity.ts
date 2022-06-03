import addVelocity from "./entity/AddVelocity";
import addXp from "./entity/AddXP";

class EntityAction {
    addVelocity(x: number, y: number, z: number) {
        return addVelocity(x, y, z)
    }

    addXp(levels: number, points: number) {
        return addXp(levels, points)
    }
}

export default EntityAction;