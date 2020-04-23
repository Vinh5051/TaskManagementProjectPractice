import { IsOptional, IsString } from 'class-validator';

export class EpicIdDto {
    @IsOptional()
    @IsString()
    id: string;
}
