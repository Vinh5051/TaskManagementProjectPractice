import {IsOptional, IsNotEmpty} from 'class-validator';

export class FeatureQueryIdDto {
    @IsOptional()
    @IsNotEmpty()
    id: string;
}
