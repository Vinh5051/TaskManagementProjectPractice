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
        return this.userRepository.signUp(user);
    }

    async logIn(userCredentials: UserCredentials): Promise<{ accessToken: string}> {
        const user = await this.userRepository.lognIn(userCredentials);

        if (!user) {
            throw new UnauthorizedException();
        }

        const {
            fistname,
            lastname,
            role,
            phonenumber,
            email,
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
        return { accessToken };
    }
}
