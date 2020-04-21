import { Injectable, UnauthorizedException } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { UserRepository } from '../repository';
import { User } from '../entities/user.entity';
import { UserCredentials } from '../dtos';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    async signUp(user: User): Promise<User> {
        return await this.userRepository.signUp(user);
    }

    async logIn(userCredentials: UserCredentials): Promise<{ accessToken: string}> {
        const {email, password} = userCredentials;
        const user = await this.userRepository.findUser(email);

        if (user && user.validatePassword(password)) {
            const {
                fistname,
                lastname,
                role,
                phonenumber,
                cretaeat,
                updateat,
            } = user;
            const payload = {
                fistname,
                lastname,
                role,
                phonenumber,
                email,
                cretaeat,
                updateat,
            };
            const accessToken = await this.jwtService.sign(payload);
            return { accessToken, ...user };
        }

        throw new UnauthorizedException();
    }
}
