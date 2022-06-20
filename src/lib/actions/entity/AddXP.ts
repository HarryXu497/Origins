import OriginsError from '../../error/OriginsError';
export class AddXPAction {
    public readonly type  = 'origins:add_xp'
    private levels: number;
    private points: number;

    constructor(levels?: number, points?: number) {
        if (points < 0) throw new OriginsError("points cannot be negative");
        this.levels = levels;
        this.points = points;
    }
}

interface AddXPObject {
    levels?: number;
    points?: number;
}

/**
 * 
 * @description Adds experience points and levels to the player, or subtracts levels.
 * @param {number} [levels] - If set, this is the amount experience points that will be given to the player. Can not be negative.
 * @param {number} [points] - If set, this is the amount experience levels that will be given to the player. Can be negative and thus used to subtract levels.
 * @returns The formatted object representing the entity action.
 * @throws {OriginsError} `Points` cannot be negative.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/add_xp/ External Documentation}.
 */
export default function addXp({ levels, points }: AddXPObject) {
    if (points < 0) throw new OriginsError(
        "`points` cannot be negative. If you wish to subtract levels, use a negative `levels` value"
    )
    return new AddXPAction(levels, points);
}
