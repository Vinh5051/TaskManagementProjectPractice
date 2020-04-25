import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Feature, FeatureSatsus } from '../entities';
export declare class FeatureRepository extends Repository<Feature> {
    saveFeatue(feature: Feature): Promise<Feature>;
    getFeature(status: FeatureSatsus, search: string): Promise<Feature[]>;
    getFeatureById(id: string): Promise<Feature>;
    updateStatus(id: string, status: FeatureSatsus): Promise<UpdateResult>;
    deleteFeature(id: string): Promise<DeleteResult>;
}
