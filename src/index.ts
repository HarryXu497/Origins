import itemStack from './lib/datatypes/ItemStack';
import _ from './lib/index';
import origin from './origin';
import power from './power';

console.log(
    itemStack({
        item: "minecraft:diamond",
        tag: "{beans}",
    })
)

console.log(
    _.Actions.Entity.give({
        stack: _.DataTypes.itemStack({
            item: "minecraft:diamond",
            amount: 10,
        }),
        itemAction: _.Actions.Item.consume({
            amount: 100,
        }),
        preferredSlot: 'mainhand',
    })
)

power.writeToFile();
origin.writeToFile("index.json")

