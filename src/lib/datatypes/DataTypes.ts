import { ModifierOperation } from "../@types/datatypes/datatypes";
import attributeModifier from "./AttributeModifer";
import attributedAttributeModifier from './AttributedAttributeModifer';
import badge from "./Badge";
import statusEffect from './StatusEffectInstance';


export default class DataTypes {
    attributeModifier(operation: ModifierOperation, value: number, description?: string) {
        return attributeModifier(operation, value, description);
    }

    attributedAttributeModifier(attribute: string, operation: ModifierOperation, value: number, description?: string)  {
        return attributedAttributeModifier(attribute, operation, value, description);
    }

    badge(sprite: string, text: string) {
        return badge(sprite, text);
    }

    statusEffect(effect: string, duration?: number, amplifier?: number, is_ambient?: boolean, show_particles?: boolean, show_icon?: boolean) {
        return statusEffect(effect, duration, amplifier, is_ambient, show_particles, show_icon);
    }
}