import { IsOptional, IsNotEmpty } from 'class-validator';
import {Epic} from 'src/domain/epic/entities';
export class CreateFeatureDto {
    @IsOptional()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    description: string;

    @IsOptional()
    priority: number;

    @IsOptional()
    @IsNotEmpty()
    epicId: string;
}
