import { Repository } from 'typeorm';
import { User } from '../entities';
import { UserCredentials } from '../dtos/user-credentials.dto';
export declare class UserRepository extends Repository<User> {
    signUp(user: User): Promise<User>;
    lognIn(userCredentials: UserCredentials): Promise<User>;
}
