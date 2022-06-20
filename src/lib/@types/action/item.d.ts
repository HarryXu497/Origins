import { ConsumeAction } from '../../actions/item/Consume';
import { DamageAction } from '../../actions/item/Damage';
import { ModifyAction } from '../../actions/item/Modify';

export type ItemActionTypes =
    ConsumeAction |
    DamageAction | 
    ModifyAction;