import { JwtPayload } from './jwt-payload.interface';
import { UsersService } from '../users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<any>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(payload: JwtPayload): Promise<import("../users/user.entity").User>;
}
export {};
