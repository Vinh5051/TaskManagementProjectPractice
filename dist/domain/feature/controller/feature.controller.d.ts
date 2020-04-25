import { FeatureService } from '../service';
import { CreateFeatureDto, FilterQuryDto, FeatureQueryIdDto, UpdateStatusQueryDto } from '../dto';
import { Feature } from '../entities';
import { User } from 'src/domain';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class FeatureController {
    private readonly featureService;
    constructor(featureService: FeatureService);
    createFeature(user: User, createFeature: CreateFeatureDto): Promise<Feature>;
    getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]>;
    getFeatureById(featureQueryIdDto: FeatureQueryIdDto): Promise<Feature>;
    updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult>;
    deleteFeature(featureQueryDto: FeatureQueryIdDto): Promise<DeleteResult>;
    admitFeature(user: User, featureQueryDto: FeatureQueryIdDto): Promise<Feature>;
}
