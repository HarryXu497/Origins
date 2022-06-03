class StatusEffectInstance {
    effect: string;
    duration: number;
    amplifier: number;
    is_ambient: boolean;
    show_particles: boolean;
    show_icon: boolean;

    constructor(effect: string, duration: number = 100, amplifier: number = 0, is_ambient: boolean = false, show_particles: boolean = true, show_icon: boolean = true) {
        this.effect = effect;
        this.duration = duration;
        this.amplifier = amplifier;
        this.is_ambient = is_ambient;
        this.show_particles = show_particles;
        this.show_icon = show_icon;
    }
}


export default function statusEffect(effect: string, duration?: number, amplifier?: number, is_ambient?: boolean, show_particles?: boolean, show_icon?: boolean) {
    return new StatusEffectInstance(effect, duration, amplifier, is_ambient, show_particles, show_icon);
}