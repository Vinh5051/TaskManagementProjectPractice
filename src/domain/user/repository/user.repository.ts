import {Repository, EntityRepository} from 'typeorm';
import {User} from '../entities';
import { CreateUserDto } from '../dtos';
import * as bcrypt from 'bcrypt';
import { UserCredentials } from '../dtos/user-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(user: User): Promise<User> {
        return this.save(user);
    }

    async findUser(email): Promise<User> {
        return await this.findOne({email});
    }

}
