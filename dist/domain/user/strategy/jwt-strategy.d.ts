import { UserRepository } from '../repository/user.repository';
import { User } from '../entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userrepository;
    constructor(userrepository: UserRepository);
    validate(paload: any): Promise<User>;
}
export {};
