import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { User } from '../entities';
import { UserCredentials } from '../dtos/user-credentials.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    signUp(createUserDto: CreateUserDto): Promise<User>;
    lognIn(userCredentials: UserCredentials): Promise<any>;
    test(user: User): any;
}
