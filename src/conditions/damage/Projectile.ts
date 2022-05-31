import Condition from "../Condition";

class ProjectileCondition extends Condition {
    public readonly type = 'origins:projectile';

    public projectile: string;

    constructor(projectile?: string) {
        super();
        this.projectile = projectile;
    }

    setProjectile(projectile: string) {
        this.projectile = projectile;
    }
}

export default ProjectileCondition;