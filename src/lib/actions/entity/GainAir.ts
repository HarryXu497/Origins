export class GainAirAction {
    private readonly type = 'origins:gain_air'
    private value: number;

    constructor(value: number) {
        this.value = value;
    }
}

interface GainAirObject {
    value: number;
}

export default function gainAir({ value }: GainAirObject) {
    return new GainAirAction(value);
}