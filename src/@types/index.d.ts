// Types
export type ModifierOperation = 'addition' | 'multiply_base' | 'multiply_total';
export type Comparison = '<' | '<=' | '>' | '>=' | '==' | '!='


// Interfaces
export interface AttributeModifier {
    operator: ModifierOperation;
    value: number;
    name: string;
}

export interface AttributedAttributeModifier {
    atttribute: string;
    operation: ModifierOperation;
    value: number;
    name: string;
}

export interface Badge {
    sprite: string;
    text: string;
}

