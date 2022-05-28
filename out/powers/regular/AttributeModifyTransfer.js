import Power from '../power.js';
/*
* Transfers the value of an attribute modifier from a specified attribute to a specified power class that extends the ValueModifyingPower super-class.
* Type ID: origins:attribute_modify_transfer
*/
class AttributeModifyTransfer extends Power {
    constructor() {
        super(...arguments);
        this.type = 'origins:attribute_modify_transfer';
    }
    setClass(value) {
        this.class = value;
        return this;
    }
    setAttribute(value) {
        this.attribute = value;
        return this;
    }
    setMultiplier(value) {
        this.multiplier = value;
        return this;
    }
}
export default AttributeModifyTransfer;
