import { DestructionType } from '../../@types/datatypes/datatypes';
import { BlockConditionType } from '../../@types/condition/block';

export class ExplodeAction {
    public readonly type = 'origins:explode';
    public power: number;
    public destruction_type: DestructionType;
    public indestructable: BlockConditionType;
    public destructable: BlockConditionType;
    public create_fire: boolean;

    constructor(power: number, destructionType: DestructionType = "break", indestructable?: BlockConditionType, destructable?: BlockConditionType, createFire: boolean = false) {
        this.power = power;
        this.destruction_type = destructionType;
        this.indestructable = indestructable;
        this.destructable = destructable;
        this.create_fire = createFire;
    }
}

interface ExplodeActionObject {
    power: number;
    destruction_type?: DestructionType;
    indestructable?: BlockConditionType;
    destructable?: BlockConditionType;
    create_fire?: boolean;
}

export default function explodeBlock({ power, destruction_type, indestructable, destructable, create_fire }: ExplodeActionObject) {
    return new ExplodeAction(power, destruction_type, indestructable, destructable, create_fire);
}
