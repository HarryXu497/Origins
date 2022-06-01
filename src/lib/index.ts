import Conditions from './conditions/Conditions';

class OriginsExtendedClass {
    public Conditions: Conditions;

    constructor() {
        this.Conditions = new Conditions();
    }
}

const OriginsExtended = new OriginsExtendedClass();



export default OriginsExtended;
