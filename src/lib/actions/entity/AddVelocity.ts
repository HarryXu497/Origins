type Space = 'world' | 'local' | 'local_horizontal' | 'local_horizontal_normalized' | 'velocity' | 'velocity_normalized' | 'velocity_horizontal' | 'velocity_horizontal_normalized'

export class AddVelocityAction {
    private readonly type = 'origins:add_velocity';
    private x: number;
    private y: number;
    private z: number;
    private space: Space;
    private client: boolean;
    private server: boolean;
    private set: boolean;

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

type ModifiedSpace = Space | 'relative_to_player' | 'global';
interface AddVelocityActionObject {
    vector: { x?: number, y?: number, z?: number }
    space: ModifiedSpace;
    client?: boolean;
    server?: boolean;
    override?: boolean;
}

/**
 * @description Adds or sets velocity towards a specific direction.
 * @param {Object} vector - The velocity vector to apply to the entity.
 * @param {Object} [vector.x=0.0]- The amount of velocity to add on the x-axis.
 * @param {Object} [vector.y=0.0] - The amount of velocity to add on the y-axis.
 * @param {Object} [vector.z=0.0] - The amount of velocity to add on the z-axis.
 * @param {ModifiedSpace} [space="world"] - The {@link ModifiedSpace Space} to perform the velocity addition in.
 * @param {boolean} [client=true] - If this is false, the action will not execute on the client.
 * @param {boolean} [server=true] - If this is false, the action will not execute on the server.
 * @param {boolean} [set=true] - If this is true, the action will act as a "set" velocity action, overriding the entity's current velocity instead of adding to it.
 * @returns The formatted object representing the entity action.
 * @link {@link https://origins.readthedocs.io/en/latest/types/entity_action_types/add_velocity/ External Documentation}.
 */
export default function addVelocity({ vector, space, client = true, server = true, override = false}: AddVelocityActionObject) {
    const { x = 0.0, y = 0.0, z = 0.0 } = vector;

    let coordinateSpace = space;
    if (coordinateSpace === 'global') coordinateSpace = 'world';
    if (coordinateSpace === 'relative_to_player') coordinateSpace = 'local';

    return new AddVelocityAction(x, y, z, coordinateSpace, client, server, override);
}
