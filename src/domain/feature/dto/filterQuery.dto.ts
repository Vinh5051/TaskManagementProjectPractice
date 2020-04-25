import { FeatureSatsus } from '../entities/feature.entity';
import {IsOptional, IsIn} from 'class-validator';
export class FilterQuryDto {
    @IsOptional()
    @IsIn([FeatureSatsus.TODO, FeatureSatsus.IN_PROGRESS, FeatureSatsus.DONE, FeatureSatsus.BUG])
    staus: FeatureSatsus;

    @IsOptional()
    search: string;
}
