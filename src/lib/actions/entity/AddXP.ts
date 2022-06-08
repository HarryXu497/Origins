import OriginsError from '../../error/OriginsError';
class AddXPAction {
    public readonly type  = 'origins:add_xp'
    public levels: number;
    public points: number;

    constructor(levels?: number, points?: number) {
        if (points < 0) throw new OriginsError("points cannot be negative");
        this.levels = levels;
        this.points = points;
    }

    setLevels(levels: number) {
        this.levels = levels;
        return this;
    }

    setPoints(points: number) {
        this.points = points;
        return this;
    }
}

interface AddXPObject {
    levels?: number;
    points?: number;
}

export default function addXp({ levels, points }: AddXPObject) {
    if (points < 0) throw new OriginsError(
        "`points` cannot be negative. If you wish to subtract levels, use a negative `levels` value"
    )
    return new AddXPAction(levels, points);
}