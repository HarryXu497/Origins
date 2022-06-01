import { ConditionType } from "../@types/condition/index";

import block from "./Block";
import damage from "./Damage";
import entity from "./Entity";
import fluid from "./Fluid";
import player from "./Player";
import biome from "./Biome";
import item from "./Item";
import and from "./meta/And";
import constant from './meta/Constant';
import or from "./meta/Or";

class Conditions {
    biome() {
        return biome();
    }

    block() {
        return block();
    }

    damage() {
        return damage();
    }

    player() {
        return player();
    }

    entity() {
        return entity();
    }

    fluid() {
        return fluid()
    }

    item() {
        return item();
    }

    and(...conditions: ConditionType[]) {
        return and(...conditions)
    }

    constant(value: boolean) {
        return constant(value);
    }

    or(...conditions: ConditionType[]) {
        return or(...conditions)
    }
}

export default Conditions;