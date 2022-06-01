type Space = 'world' | 'local' | 'local_horizontal' | 'local_horizontal_normalized' | 'velocity' | 'velocity_normalized' | 'velocity_horizontal' | 'velocity_horizontal_normalized'

class AddVelocityAction {
    public readonly type = 'origins:add_velocity';
    public x: number;
    public y: number;
    public z: number;
    public space: Space;
    public client: boolean;
    public server: boolean;
    public set: boolean

    constructor(x?: number, y?: number, z?: number) {
        this.setVector(x, y, z);
    }

    private setVector(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    setX(x: number) {
        this.x = x;
        return this;
    }

    setY(y: number) {
        this.y = y;
        return this;
    }

    setZ(z: number) {
        this.z = z;
        return this;
    }

    setClient(set: boolean) {
        this.set = set;
        return this;
    }

    setServer(set: boolean) {
        this.set = set;
        return this;
    }

    setSet(set: boolean) {
        this.set = set;
        return this;
    }
}

class AddVelocityActionFactory {
    private readonly instance: AddVelocityAction;

    constructor(x: number, y: number, z: number) {
        this.instance = new AddVelocityAction(x, y, z);
    }

    options(space: Space, override?: boolean) {
        this.instance.space = space;
        this.instance.set = override;
        return this.instance;
    }
}


export default function addVelocity(x: number, y: number, z: number) {
    return new AddVelocityActionFactory(x, y, z);
}