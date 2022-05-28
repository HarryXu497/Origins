import Power from '../power.js';

/*
* Applies one or more attribute modifiers.
* Type ID: origins:attribute
*/

class Attribute extends Power {
    public modifier: string;
    public modifiers: string[];
    public update_health: boolean;

    setModifier(value: string) {
        this.modifier = value;
        return this;
    }

    setModifiers(value: string[]) {
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