export class BonemealAction {
    public readonly type = 'origins:bonemeal';
    public effects: boolean;

    constructor(showEffect: boolean) {
        this.effects = showEffect;
    }
}

export default function bonemeal(showEffects: boolean = true) {
    return new BonemealAction(showEffects);
}