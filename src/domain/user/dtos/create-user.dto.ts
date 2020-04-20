import {IsNotEmpty, MinLength, MaxLength, IsString, IsNumber, Length, Matches} from 'class-validator';

export class CreateUserDto {
    fistname: string;

    lastname: string;

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

    // @Length(10)
    phonenumber: number;
}
