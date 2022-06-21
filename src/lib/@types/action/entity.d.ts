import { AddVelocityAction } from '../../actions/entity/AddVelocity';
import { AddXPAction } from '../../actions/entity/AddXP';
import { ApplyEffectAction } from '../../actions/entity/ApplyEffect';
import { BlockActionAtAction } from '../../actions/entity/BlockActionAt';
import { ClearEffectAction } from '../../actions/entity/ClearEffect';
import { CraftingTableAction } from '../../actions/entity/CraftingTable';
import { DamageAction } from '../../actions/entity/Damage';
import { DismountAction } from '../../actions/entity/Dismount';
import { EmitGameEventAction } from '../../actions/entity/EmitGameEvent';
import { EnderChestAction } from '../../actions/entity/EnderChest';
import { EquippedItemAction } from '../../actions/entity/EquippedItem';
import { ExecuteCommandAction } from '../../actions/entity/ExecuteCommand';
import { ExhaustAction } from '../../actions/entity/Exhaust';

export type EntityActionTypes = 
    AddVelocityAction |
    AddXPAction |
    ApplyEffectAction |
    BlockActionAtAction |
    ClearEffectAction |
    CraftingTableAction |
    DamageAction |
    DismountAction |
    EmitGameEventAction |
    EnderChestAction |
    EquippedItemAction |
    ExecuteCommandAction |
    ExhaustAction;