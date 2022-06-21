import Power from '../Power.js';

/*
* Transfers the value of an attribute modifier from a specified attribute to a specified power class that extends the ValueModifyingPower super-class.
* Type ID: origins:attribute_modify_transfer 
*/
class AttributeModifyTransfer extends Power {
    private readonly type = 'origins:attribute_modify_transfer';
    public class: string;
    public attribute: string;
    public multiplier: number;

    setClass(value: string) {
        this.class = value;
        return this;
    }

    setAttribute(value: string) {
        this.attribute = value;
        return this;
    }

    setMultiplier(value: number) {
        this.multiplier = value;
        return this;
    }
}

export default AttributeModifyTransfer