import OriginsExtended from "./lib/index";
import Burn from "./lib/powers/regular/Burn";
const { player, and, biome } = OriginsExtended.Conditions;

const power = new Burn("custom", "boom", "power");

power
    .setBurnDuration(10)
    .setInterval(120)
    .setDescription("Burns enemies with Sfan power.")
    .setCondition( 
        and(
            player().air().isEqualTo(100),
            player().brightness().isEqualTo(100),
            biome().is("sfan")
            
        )
    )

export default power;