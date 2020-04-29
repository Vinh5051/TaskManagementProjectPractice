import { FeatureStatus } from '../entities/feature.entity';
import {IsOptional, IsNotEmpty, IsIn} from 'class-validator';
export class UpdateStatusQueryDto {
    @IsOptional()
    @IsNotEmpty()
    id: string;

    @IsOptional()
    @IsIn([FeatureStatus.TODO, FeatureStatus.IN_PROGRESS, FeatureStatus.DONE, FeatureStatus.BUG])
    status: FeatureStatus;
}
