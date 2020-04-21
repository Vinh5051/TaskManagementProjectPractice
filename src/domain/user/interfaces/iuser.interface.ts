import {User} from '../entities';

export interface IUserService {

    logIn(email: string, password: string): User | Promise<User>;

    signUp(user: User): User | Promise<User>;
}
