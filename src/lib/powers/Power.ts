import * as fs from 'fs';
import { ConditionType } from '../@types/condition/index';
import { EntityConditionType } from '../@types/condition/entity';
import { MetaConditionType } from '../@types/condition/meta';

class Power {
    public fileName: string;
    public namespace: string;
    public id: string;
    public type: string;
    public name: string;
    public description: string;
    public hidden: boolean;
    public loading_priority: number;
    public badges: string[];
    public condition: EntityConditionType | MetaConditionType;

    constructor(namespace: string, fileName: string, name: string, description: string = "") {
        this.namespace = namespace;
        this.fileName = fileName;
        this.id = `${namespace}:${fileName}`
        this.name = name;
        this.description = description;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    setHidden(hidden: boolean) {
        this.hidden = hidden;
        return this;
    }

    setLoadingPriority(priority: number) {
        this.loading_priority = priority;
        return this;
    }

    setBadges(badges: string[]) {
        this.badges = badges;
        return this;
    }

    setCondition(value: EntityConditionType | MetaConditionType) {
        this.condition = value;
        return this;
    }

    if(value: EntityConditionType | MetaConditionType) {
        return this.setCondition(value)
    }

    writeToFile() {
        const obj = { ...this };
        delete obj.fileName;
        delete obj.id;
        delete obj.namespace;

        fs.writeFile(this.fileName + ".json", JSON.stringify(obj, null, 4), (err) => {
            if (err) {
                throw err;
            }
        }) 
    }
     
}

export default Power;