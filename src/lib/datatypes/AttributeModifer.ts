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

interface AttributeModifierObject {
    operation: ModifierOperation;
    value: number;
    description?: string
}

export default function attributeModifier(attributeModifierObject: AttributeModifierObject) {
    const { operation, value, description } = attributeModifierObject;
    return new AttributeModifier(operation, value, description);
}