import _ from './lib/index';
import origin from './origin';
import power from './power';

console.log(
    _.Actions.Entity.extinguish()
)

power.writeToFile();
origin.writeToFile("index.json")

