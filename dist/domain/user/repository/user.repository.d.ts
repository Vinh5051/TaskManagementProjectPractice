import { Repository } from 'typeorm';
import { User } from '../entities';
export declare class UserRepository extends Repository<User> {
    signUp(user: User): Promise<User>;
    findUser(email: any): Promise<User>;
}
