class AddXPAction {
    public readonly type  = 'origins:add_xp'
    public levels: number;
    public points: number;

    constructor(levels?: number, points?: number) {
        this.levels = levels;
        this.points = points;
    }
}