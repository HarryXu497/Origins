export class BonemealAction {
    public readonly type = 'origins:bonemeal';
    public effects: boolean;

    constructor(showEffect: boolean) {
        this.effects = showEffect;
    }
}

interface BonemealObject {
    showEffects: boolean
}

export default function bonemeal({ showEffects = true}: BonemealObject ) {
    return new BonemealAction(showEffects);
}