import OriginsExtended from './lib/index';

const { blockActionAtEntity } = OriginsExtended.Actions.Entity
const { explodeBlock } = OriginsExtended.Actions.Block

import origin from './origin';
import power from './power';

console.log(
    blockActionAtEntity({
        blockAction: explodeBlock({
            power: 10,
            destructionType: 'destroy',
            createFire: true
        })
    })
)

power.writeToFile();
origin.writeToFile("index.json")

