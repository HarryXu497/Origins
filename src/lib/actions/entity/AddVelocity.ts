import OriginsError from '../../error/OriginsError';
type Space = 'world' | 'local' | 'local_horizontal' | 'local_horizontal_normalized' | 'velocity' | 'velocity_normalized' | 'velocity_horizontal' | 'velocity_horizontal_normalized'

class AddVelocityAction {
    public readonly type = 'origins:add_velocity';
    public x: number;
    public y: number;
    public z: number;
    public space: Space;
    public client: boolean;
    public server: boolean;
    public set: boolean;

    constructor(x: number, y: number, z: number, space: Space, client: boolean, server: boolean, set: boolean) {
        this.setVector(x, y, z);
        this.space = space;
        this.client = client;
        this.server = server;
        this.set = set;
    }

    private setVector(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

interface AddVelocityActionObject {
    vector: { x?: number, y?: number, z?: number }
    space: Space | 'relative_to_player' | 'global';
    client?: boolean;
    server?: boolean;
    override?: boolean;
}

export default function addVelocity({ vector, space, client = true, server = true, override = false}: AddVelocityActionObject) {
    const { x = 0.0, y = 0.0, z = 0.0 } = vector;

    let coordinateSpace = space;
    if (coordinateSpace === 'global') coordinateSpace = 'world';
    if (coordinateSpace === 'relative_to_player') coordinateSpace = 'local';

    return new AddVelocityAction(x, y, z, coordinateSpace, client, server, override);
}
