import {IsNotEmpty, MinLength, MaxLength, IsString, Matches} from 'class-validator';

export class UserCredentials {
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    @IsString()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    @IsString()
    @Matches(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        {message: 'Password too weak!!!!'})
    password: string;
}
