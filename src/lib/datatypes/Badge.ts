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


export default function badge(badgeObject: BadgeObject) {
    const { sprite, text } = badgeObject;
    return new Badge(sprite, text);
}