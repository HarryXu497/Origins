import Condition from "../Condition";

class OriginCondition extends Condition {
    public readonly type = 'origins:origin';

    public origin: string;
    public layer: string;

    constructor(origin?: string, layer?: string) {
        super();
        this.origin = origin;
        this.layer = layer;
    }

    setOrigin(origin: string) {
        this.origin = origin;
        return this;
    }

    setLayer(layer: string) {
        this.layer = layer;
        return this;
    }
}

export class OriginConditionFactory {
    private readonly instance: OriginCondition;

    constructor(origin?: string, layer?: string) {
        this.instance = new OriginCondition(origin, layer);
    }

    is(origin: string, layer?: string) {
        this.instance.origin = origin;
        this.instance.layer = layer;
        return this.instance;
    }

    inLayer(layer: string) {
        this.instance.layer = layer;
        return this.instance;
    }


}


export default OriginCondition;