import Condition from "../Condition";

class GamemodeCondition extends Condition {
    private readonly type = 'origins:gamemode';
    public gamemode: 'creative' | 'adventure' | 'survival' | 'adventure' | string;

    constructor(gamemode?: 'creative' | 'adventure' | 'survival' | 'adventure' | string) {
        super();
        this.gamemode = gamemode;
    }

    setGamemode(gamemode: string) {
        this.gamemode = gamemode;
    }
}

export class GamemodeConditionFactory {
    private readonly instance: GamemodeCondition;

    constructor(gamemode?: 'creative' | 'adventure' | 'survival' | 'adventure' | string) {
        this.instance = new GamemodeCondition(gamemode);
    }

    isCreative() {
        this.instance.gamemode = 'creative';
        return this.instance;
    }

    isSurvival() {
        this.instance.gamemode = 'survival';
        return this.instance;
    }

    isAdventure() {
        this.instance.gamemode = 'adventure';
        return this.instance;
    }

    isSpectator() {
        this.instance.gamemode = 'spectator';
        return this.instance;
    }
}

export default GamemodeCondition;
export function gamemode(gamemode?: 'creative' | 'adventure' | 'survival' | 'adventure' | string) {
    return new GamemodeConditionFactory(gamemode);
}