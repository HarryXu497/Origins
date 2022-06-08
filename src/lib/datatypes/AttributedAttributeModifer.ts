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

interface AttributedAttributeModifierObject {
    attribute: string;
    operation: ModifierOperation;
    value: number;
    description?: string
}

export default function attributedAttributeModifier({ attribute, operation, value, description }: AttributedAttributeModifierObject) {
    return new AttributedAttributeModifier(attribute, operation, value, description);
}