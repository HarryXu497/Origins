import * as fs from 'fs';
class Power {
    constructor(fileName, name, description = "") {
        this.fileName = fileName;
        this.name = name;
        this.description = description;
    }
    setType(type) {
        this.type = type;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setHidden(hidden) {
        this.hidden = hidden;
    }
    setLoadingPriority(priority) {
        this.loading_priority = priority;
        return this;
    }
    setBadges(badges) {
        this.badges = badges;
    }
    writeToFile() {
        const obj = Object.assign({}, this);
        delete obj.fileName;
        fs.writeFile(this.fileName + ".json", JSON.stringify(obj), (err) => {
            if (err) {
                throw err;
            }
        });
    }
}
export default Power;
