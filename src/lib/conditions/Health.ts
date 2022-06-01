import { AbsoluteHealthConditionFactory } from "./entity/Health";
import { RelativeHealthConditionFactory } from './entity/RelativeHealth';

class HealthConditionFactory {
    absolute() {
        return new AbsoluteHealthConditionFactory();
    }

    relative() {
        return new RelativeHealthConditionFactory();
    }
}

export default HealthConditionFactory;