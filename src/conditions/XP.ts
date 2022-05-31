import { XPLevelsConditionFactory } from './entity/XPLevels';
import { XPPointsConditionFactory } from './entity/XPPoints';

class XPConditonFactory {
    levels() {
        return new XPLevelsConditionFactory()
    }

    points() {
        return new XPPointsConditionFactory();
    }
}

export default XPConditonFactory