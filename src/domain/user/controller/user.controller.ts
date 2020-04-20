import { Controller, Post, UsePipes, ValidationPipe, Body, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from '../dtos/create-user.dto';
import {User} from '../entities';
import { UserCredentials } from '../dtos/user-credentials.dto';
import { AuthGuard, jwt } from '../../../common';
//import { AuthGuard } from '@nestjs/passport';


@Controller('user')
export class UserController {
    constructor(
        private userService: UserService,
    ) {}

    @Post('/signup')
    @UsePipes(ValidationPipe)
    signUp(@Body(ValidationPipe) createUserDto: CreateUserDto): Promise<User> {
        return this.userService.signUp(plainToClass(User, createUserDto));
    }

    @Post('/login')
    lognIn(@Body(ValidationPipe) userCredentials: UserCredentials): any | Promise<any> {
        return this.userService.logIn(userCredentials);
    }

    @Post('/test')
    @UseGuards(AuthGuard)
    test(@jwt() user: User): any {
        return user;
    }
}
