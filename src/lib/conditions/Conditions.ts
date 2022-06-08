import { ConditionType } from "../@types/condition/index";

import block from "./Block";
import damage from "./Damage";
import entity from "./Entity";
import fluid from "./Fluid";
import player from "./Player";
import biome from "./Biome";
import item from './Item';
import and from "./meta/And";
import constant from './meta/Constant';
import or from "./meta/Or";

class Conditions {
    public static readonly biome = biome;
    public static readonly block = block; 
    public static readonly damage = damage;
    public static readonly player = player;
    public static readonly entity = entity;
    public static readonly fluid = fluid;
    public static readonly item = item;
    public static readonly and = and;
    public static readonly constant = constant;
    public static readonly or = or;
}

export default Conditions;
