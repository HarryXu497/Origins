import Condition from "../Condition";

class ProjectileCondition extends Condition {
    private readonly type = 'origins:projectile';

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