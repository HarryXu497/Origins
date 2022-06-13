type OperationType = 'add' | 'set';

export class ModifyBlockStateAction {
    public readonly type = 'origins:modify_block_state';
    public property: string;
    public operation: OperationType;
    public change: number;
    public value: boolean;
    public enum: string;
    public cycle: boolean;

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
    newValue?: number | boolean | string;
    cycle?: boolean;
}

export default function modifyBlockState({ property, operation, newValue, cycle = false }: ModifyBlockStateObject) {
    let change: number;
    let value: boolean;
    let _enum: string;

    if (typeof newValue === 'number') {
        change = newValue;
    }

    if (typeof newValue === 'boolean') {
        value = newValue;
    }

    if (typeof newValue === 'string') {
        _enum = newValue;
    }

    return new ModifyBlockStateAction(property, operation, change, value, _enum, cycle);
}