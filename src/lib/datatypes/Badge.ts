class Badge {
    sprite: string;
    text: string;

    constructor(sprite: string, text: string) {
        this.sprite = sprite;
        this.text = text;
    }
}


export default function badge(sprite: string, text: string) {
    return new Badge(sprite, text);
}