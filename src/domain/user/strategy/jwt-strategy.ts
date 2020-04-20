import {PassportStrategy} from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {InjectRepository} from '@nestjs/typeorm';
import { UserRepository } from '../repository/user.repository';
import { UnauthorizedException } from '@nestjs/common';
import { User } from '../entities/user.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        @InjectRepository(UserRepository)
        private userrepository: UserRepository,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpitation: false,
            secretOrKey: 'taskManangement',
        });
    }

    async validate(paload: any): Promise<User> {
        const {email} = paload;
        const  user = await this.userrepository.findOne({email});

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
