import { FeatureStatus } from '../entities/feature.entity';
import {IsOptional, IsIn} from 'class-validator';
export class FilterQuryDto {
    @IsOptional()
    @IsIn([FeatureStatus.TODO, FeatureStatus.IN_PROGRESS, FeatureStatus.DONE, FeatureStatus.BUG])
    staus: FeatureStatus;

    @IsOptional()
    search: string;
}
