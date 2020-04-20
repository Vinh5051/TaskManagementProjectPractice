import {Repository, EntityRepository} from 'typeorm';
import {User} from '../entities';
import { CreateUserDto } from '../dtos';
import * as bcrypt from 'bcrypt';
import { UserCredentials } from '../dtos/user-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(user: User): Promise<User> {
        user.salt = await bcrypt.genSalt();
        user.password = await user.hashPassword(user.password, user.salt);
        return this.save(user);
    }

    async lognIn(userCredentials: UserCredentials): Promise<User> {
        const {email, password} = userCredentials;
        const user = await this.findOne({email});

        if (user &&  user.validatePassword(password)) {
            return user;
        } else {
            return null;
        }
    }
}
