import { FeatureSatsus } from '../entities/feature.entity';
import {IsOptional, IsNotEmpty, IsIn} from 'class-validator';
export class UpdateStatusQueryDto {
    @IsOptional()
    @IsNotEmpty()
    id: string;

    @IsOptional()
    @IsIn([FeatureSatsus.TODO, FeatureSatsus.IN_PROGRESS, FeatureSatsus.DONE, FeatureSatsus.BUG])
    status: FeatureSatsus;
}
