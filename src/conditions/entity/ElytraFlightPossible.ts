import Condition from "../Condition";

class ElytraFlightPossibleCondition extends Condition {
    public readonly type = 'origins:elytra_flight_possible';
    public check_state: boolean;
    public check_abilities: boolean;

    setCheckState(value: boolean) {
        this.check_state = value;
    }

    setCheckAbilities(value: boolean) {
        this.check_abilities = value;
    }
}

class ElytraFlightPossibleConditionFactory {
    private readonly instance: ElytraFlightPossibleCondition;

    constructor() {
        this.instance = new ElytraFlightPossibleCondition();
    }

    canUseFlightKeybind() {
        this.instance.check_state = true;
        return this.instance;
    }

    canActivateFlight() {
        this.instance.check_abilities = true;
        return this.instance;
    }

    cannotUseFlightKeybind() {
        this.instance.check_state = false;
        return this.instance;
    }

    cannotActivateFlight() {
        this.instance.check_abilities = false;
        return this.instance;
    }

    mustBeAbleToFly() {
        this.instance.check_state = true;
        this.instance.check_abilities = true;
        return this.instance;
    }
}

export default ElytraFlightPossibleCondition;
export function elytra() {
    return new ElytraFlightPossibleConditionFactory();
}