import Power from '../power.js';
/*
* Applies one or more attribute modifiers.
* Type ID: origins:attribute
*/
class Attribute extends Power {
    constructor() {
        super(...arguments);
        this.type = 'origins:attribute';
    }
    setModifier(value) {
        this.modifier = value;
        return this;
    }
    setModifiers(value) {
        this.modifiers = value;
        return this;
    }
    setUpdateHealth(value) {
        this.update_health = value;
        return this;
    }
}
function a(a) {
}
export default Attribute;
