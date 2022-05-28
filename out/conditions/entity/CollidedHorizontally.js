import Condition from "../Condition";
class CollidedHorizontallyCondition extends Condition {
    constructor() {
        super(...arguments);
        this.type = 'origins:collided_horizontally';
    }
}
export default CollidedHorizontallyCondition;
