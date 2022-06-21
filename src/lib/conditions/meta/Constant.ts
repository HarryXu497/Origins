export class ConstantCondition {
    private readonly type = 'origins:constant';
    public value: boolean;

    constructor(value?: boolean) {
        this.value = value;
    }

    setValue(value: boolean) {
        this.value = value;
        return this;
    }
}

export default function constant(value: boolean) {
    return new ConstantCondition(value);
}




