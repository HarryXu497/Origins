import { ModifierOperation } from "../@types/datatypes/datatypes";
import attributeModifier from './AttributeModifer';
import attributedAttributeModifier from './AttributedAttributeModifer';
import badge from "./Badge";
import statusEffect, { StatusEffectObject } from './StatusEffectInstance';


export default class DataTypes {
    public static readonly attributeModifier = attributeModifier;
    public static readonly attributedAttributeModifier = attributedAttributeModifier;
    public static readonly badge = badge;
    public static readonly statusEffect = statusEffect;
}