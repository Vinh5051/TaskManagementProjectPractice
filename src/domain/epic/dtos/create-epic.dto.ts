import {IsOptional, IsString, MinLength, MaxLength} from 'class-validator';

export class CreateEpicDto {
    @IsOptional()
    @IsString()
    @MaxLength(100)
    nameproject: string;

    @IsOptional()
    @IsString()
    @MaxLength(100)
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    description: string;
}
