import { IsOptional, IsString } from 'class-validator';

export class EpicParamIdDto {
    @IsOptional()
    @IsString()
    id: string;
}
