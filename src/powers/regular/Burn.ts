import Power from '../power';


/* 
* Sets the entity that has the power on fire within the specified interval.
* Type ID: origins:burn
*/
class Burn extends Power {
    public readonly type = "origins:burn";
    public interval: number;
    public burn_duration: number;

    setInterval(interval: number) {
        this.interval = interval;
        return this;
    }

    setBurnDuration(duration: number) {
        this.burn_duration = duration;
        return this;
    }
}


export default Burn