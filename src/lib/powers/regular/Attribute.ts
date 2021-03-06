import { AttributedAttributeModifier } from '../../@types/datatypes/datatypes';
import Power from '../Power.js';

/*
* Applies one or more attribute modifiers.
* Type ID: origins:attribute
*/

class Attribute extends Power {
    private readonly type = 'origins:attribute';
    public modifier: AttributedAttributeModifier;
    public modifiers: AttributedAttributeModifier[];
    public update_health: boolean;

    setModifier(value: AttributedAttributeModifier) {
        this.modifier = value;
        return this;
    }

    setModifiers(value: AttributedAttributeModifier[]) {
        this.modifiers = value;
        return this;
    }

    setUpdateHealth(value: boolean) {
        this.update_health = value;
        return this;
    }
}


function a(a: number) {

}
export default Attribute;