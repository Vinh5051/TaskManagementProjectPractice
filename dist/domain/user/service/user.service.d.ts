import { UserRepository } from '../repository';
import { User } from '../entities/user.entity';
import { UserCredentials } from '../dtos';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly userRepository;
    private readonly jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signUp(user: User): Promise<User>;
    logIn(userCredentials: UserCredentials): Promise<{
        accessToken: string;
    }>;
}
