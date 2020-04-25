import { FeatureRepository } from '../repository';
import { IFeatureService } from '../interfaces';
import { User } from 'src/domain';
import { Feature } from '../entities';
import { FeatureQueryIdDto, UpdateStatusQueryDto, FilterQuryDto } from '../dto';
import { UpdateResult, DeleteResult } from 'typeorm';
import { EpicRepository } from '../../epic/repository';
export declare class FeatureService implements IFeatureService {
    private readonly featureRepository;
    private readonly epicRepository;
    constructor(featureRepository: FeatureRepository, epicRepository: EpicRepository);
    createFeature(user: User, epicId: string, feature: Feature): Promise<Feature>;
    getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]>;
    getFeatureById(featureQueryIdDto: FeatureQueryIdDto): Promise<Feature>;
    updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult>;
    deleteFeature(featureQueryIdDto: FeatureQueryIdDto): Promise<DeleteResult>;
    admitFeature(user: User, featureQueryDto: FeatureQueryIdDto): Promise<Feature>;
}
