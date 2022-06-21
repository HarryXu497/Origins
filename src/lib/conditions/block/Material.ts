import Condition from "../Condition";

class MaterialCondition extends Condition {
    private readonly type = 'origins:material'
    public material: string;
    public materials: string[];

    constructor(...materials: string[]) {
        super();
        if (materials.length === 1) {
            this.material = materials[0];
            return;
        }
        if (materials.length > 1) {
            this.materials = materials;
            return;
        }
    }

    setMaterial(material: string) {
        this.material = material;
        return this;
    }

    setMaterials(materials: string[]) {
        this.materials = materials;
        return this;
    }
}

export default MaterialCondition;