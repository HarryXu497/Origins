import Condition from "../Condition";
class ElytraFlightPossibleCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:elytra_flight_possible';
    }
    setCheckState(value) {
        this.check_state = value;
    }
    setCheckAbilities(value) {
        this.check_abilities = value;
    }
}
class ElytraFlightPossibleConditionFactory {
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
