import { Comparison } from '../../@types/datatypes/datatypes';
import Condition from '../Condition';

class CommandCondition extends Condition {
    public readonly type = 'origins:command';
    public command: string;
    public comparison: Comparison;
    public compare_to: number;

    constructor(command?: string, comparison?: Comparison, compare_to?: number) {
        super();
        this.command = command;
        this.comparison = comparison;
        this.compare_to = compare_to;
    }

    setCommand(command: string) {
        this.command = command;
    }

    setComparison(comparison: Comparison) {
        this.comparison = comparison
        return this;
    }

    setCompareTo(value: number) {
        this.compare_to = value;
        return this;
    }
}

export class CommandConditionFactory {
    private readonly instance: CommandCondition;

    constructor(command: string) {
        this.instance = new CommandCondition();
        this.instance.command = command;
    }

    isGreaterThan(value: number) {
        this.instance.comparison = '>';
        this.instance.compare_to = value;
        return this.instance;
    }

    isGreaterThanOrEqualTo(value: number) {
        this.instance.comparison = '>=';
        this.instance.compare_to = value;
        return this.instance;
    }

    isLessThan(value: number) {
        this.instance.comparison = '<';
        this.instance.compare_to = value;
        return this.instance;
    }

    isLessThanOrEqualTo(value: number) {
        this.instance.comparison = '<=';
        this.instance.compare_to = value;
        return this.instance;
    }

    isEqualTo(value: number) {
        this.instance.comparison = '==';
        this.instance.compare_to = value;
        return this.instance;
    }

    isNotEqualTo(value: number) {
        this.instance.comparison = '!=';
        this.instance.compare_to = value;
        return this.instance;
    }
}

export default CommandCondition;
export function command(command: string) {
    return new CommandConditionFactory(command);
}
