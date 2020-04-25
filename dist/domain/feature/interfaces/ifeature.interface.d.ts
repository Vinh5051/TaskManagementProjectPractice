import { Feature } from '../entities/feature.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from 'src/domain/user';
import { FilterQuryDto } from '../dto/filterQuery.dto';
import { FeatureQueryIdDto } from '../dto/feature-param-id.dtp';
import { UpdateStatusQueryDto } from '../dto/update-status-Query.dto';
export interface IFeatureService {
    createFeature(user: User, epicId: string, feature: Feature): Promise<Feature>;
    getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]>;
    getFeatureById(featureQueryIdDto: FeatureQueryIdDto): Promise<Feature>;
    updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult>;
    deleteFeature(featureQueryIdDto: FeatureQueryIdDto): Promise<DeleteResult>;
}
