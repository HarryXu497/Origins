import { AndCondition } from '../../conditions/meta/And';
import { ConstantCondition } from '../../conditions/meta/Constant';
import { OrCondition } from '../../conditions/meta/Or';



export type MetaConditionType = AndCondition | ConstantCondition | OrCondition;