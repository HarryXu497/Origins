import Condition from '../Condition';
class CommandCondition extends Condition {
    constructor(command, comparison, compare_to) {
        super();
        this.type = 'origins:command';
        this.command = command;
        this.comparison = comparison;
        this.compare_to = compare_to;
    }
    setCommand(command) {
        this.command = command;
    }
    setComparison(comparison) {
        this.comparison = comparison;
        return this;
    }
    setCompareTo(value) {
        this.compare_to = value;
        return this;
    }
}
class CommandConditionFactory {
    constructor(command) {
        this.instance = new CommandCondition();
        this.instance.command = command;
    }
    mustBeGreaterThan(value) {
        this.instance.comparison = '>';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeGreaterThanOrEqualTo(value) {
        this.instance.comparison = '>=';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeLessThan(value) {
        this.instance.comparison = '<';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeLessThanOrEqualTo(value) {
        this.instance.comparison = '<=';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeEqualTo(value) {
        this.instance.comparison = '==';
        this.instance.compare_to = value;
        return this.instance;
    }
    mustBeNotEqualTo(value) {
        this.instance.comparison = '!=';
        this.instance.compare_to = value;
        return this.instance;
    }
}
export default CommandCondition;
export function command(command) {
    return new CommandConditionFactory(command);
}
