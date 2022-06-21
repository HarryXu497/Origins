type OperationType = 'add' | 'set';

export class ModifyBlockStateAction {
    private readonly type = 'origins:modify_block_state';
    private property: string;
    private operation: OperationType;
    private change: number;
    private value: boolean;
    private enum: string;
    private cycle: boolean;

    constructor(property: string, operation: OperationType = 'add', change?: number, value?: boolean, _enum?: string, cycle: boolean = false) {
        this.property = property;
        this.operation = operation;
        this.change = change;
        this.value = value;
        this.enum = _enum;
        this.cycle = cycle;
        
        if (this.change === undefined) delete this.change;
        if (this.value === undefined) delete this.value;
        if (this.enum === undefined) delete this.enum;
    }
}

interface ModifyBlockStateObject {
    property: string;
    operation: OperationType; 
    value: number | boolean | string;
    cycle?: boolean;
}

/**
 * 
 * @description Modifies the block state property of the block. Depending on the property type,
 *              different values are expected: value can be either a string, number, or boolean.
 * @param {string} property - The name of the property that will be modified. Examples are facing or age. See {@link https://minecraft.fandom.com/wiki/Block_states#List_of_block_states Minecraft Fandom Wiki: Block States (List of block states)} for possible values.
 * @param {OperationType} [operation="add"] - Determines how the value specified in the change field is operated on the specified property. Accepts "add" or "set". "add" only applies to numerical `value`.
 * @param {number | boolean | string} value - The new value to be "set" or "add" (Only for numerical values).
 * @param {boolean} [cycle=false] - If set to true, changes the property to the next state in the cycle, ignoring all other optional fields. All property types can use this operation.
 * @returns The formatted object representing the block action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/block_action_types/modify_block_state/ External Documentation}.
 */
export default function modifyBlockState({ property, operation, value, cycle = false }: ModifyBlockStateObject) {
    let change: number;
    let _value: boolean;
    let _enum: string;

    if (typeof value === 'number') {
        change = value;
    }

    if (typeof value === 'boolean') {
        _value = value;
    }

    if (typeof value === 'string') {
        _enum = value;
    }

    return new ModifyBlockStateAction(property, operation, change, _value, _enum, cycle);
}
