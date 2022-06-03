import { ModifierOperation } from '../@types/datatypes/datatypes';
import { AttributeModifier } from './AttributeModifer';

class AttributedAttributeModifier extends AttributeModifier {
    operation: ModifierOperation;
    value: number;
    name: string;
    attribute: string;

    constructor(attribute: string, operation: ModifierOperation, value: number, description?: string) {
        super(operation, value, description);
        this.attribute = attribute;
    }
}

export default function attributedAttributeModifier(attribute: string, operation: ModifierOperation, value: number, description?: string) {
    return new AttributedAttributeModifier(attribute, operation, value, description);
}