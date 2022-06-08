class Badge {
    sprite: string;
    text: string;

    constructor(sprite: string, text: string) {
        this.sprite = sprite;
        this.text = text;
    }
}

interface BadgeObject {
    sprite: string;
    text: string
}


export default function badge({ sprite, text }: BadgeObject) {
    return new Badge(sprite, text);
}