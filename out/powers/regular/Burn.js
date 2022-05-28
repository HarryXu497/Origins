import Power from '../power.js';
/*
* Sets the entity that has the power on fire within the specified interval.
* Type ID: origins:burn
*/
class Burn extends Power {
    constructor() {
        super(...arguments);
        this.type = "origins:burn";
    }
    setInterval(interval) {
        this.interval = interval;
        return this;
    }
    setBurnDuration(duration) {
        this.burn_duration = duration;
        return this;
    }
}
export default Burn;
