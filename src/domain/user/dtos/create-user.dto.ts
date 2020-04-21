import {IsNotEmpty, MinLength, MaxLength, IsString, IsNumber, Length, Matches, IsOptional} from 'class-validator';
import {ToNumber} from 'src/common/pipes';

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
    @IsOptional()
    @ToNumber()
    phonenumber: number;
}
