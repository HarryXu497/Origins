import AmountCondition from "../../conditions/damage/Amount";
import AttackerCondition from '../../conditions/damage/Attacker';
import FireCondition from "../../conditions/damage/Fire";
import NameCondition from "../../conditions/damage/Name";
import ProjectileCondition from "../../conditions/damage/Projectile";

export type DamageConditionType = AmountCondition | AttackerCondition | FireCondition | NameCondition | ProjectileCondition;