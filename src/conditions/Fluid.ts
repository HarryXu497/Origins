import InTagCondition from "./fluid/InTag";
import StillCondition from "./fluid/Still";
import EmptyCondition from "./item/Empty";


class FluidConditionFactory {
    isEmpty() {
        return new EmptyCondition();
    }

    hasTag(tag: string) {
        return new InTagCondition(tag);
    }

    isStill() {
        return new StillCondition();
    }
}


export default function fluid() {
    return new FluidConditionFactory();
}
