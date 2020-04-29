import { Feature } from '../entities/feature.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from 'src/domain/user';
import {CreateFeatureDto} from '../dto/create-feature.dto';
import { FilterQuryDto } from '../dto/filter-query.dto';
import {FeatureParamIdDto} from '../dto/feature-param-id.dto';
import {UpdateStatusQueryDto} from '../dto/update-status-query.dto';

export interface IFeatureService {
    createFeature(user: User, epicId: string, feature: Feature): Promise<Feature>;

    getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]>;

    getFeatureById(featureQueryIdDto: FeatureParamIdDto): Promise<Feature>;

    updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult>;

    deleteFeature(featureQueryIdDto: FeatureParamIdDto): Promise<DeleteResult>;
}
