import { ModifierOperation } from '../@types/datatypes/datatypes';

export class AttributeModifier {
    operation: ModifierOperation;
    value: number;
    name: string;

    constructor(operation: ModifierOperation, value: number, description?: string) {
        this.operation = operation;
        this.value = value;
        this.name = description;
    }

}

export default function attributeModifier(operation: ModifierOperation, value: number, description?: string) {
    return new AttributeModifier(operation, value, description);
}