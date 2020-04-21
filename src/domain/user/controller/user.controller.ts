import { Controller, Post, UsePipes, ValidationPipe, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dtos/create-user.dto';
import {User} from '../entities';
import { UserCredentials } from '../dtos/user-credentials.dto';
import { AuthGuard, jwt } from '../../../common';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Post('/signup')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
        return await this.userService.signUp(plainToClass(User, createUserDto));
    }

    @Post('/login')
    async lognIn(@Body() userCredentials: UserCredentials): Promise<any> {
        return await this.userService.logIn(userCredentials);
    }

    @Post('/test')
    @UseGuards(AuthGuard)
    test(@jwt() user: User): any {
        return user;
    }
}
