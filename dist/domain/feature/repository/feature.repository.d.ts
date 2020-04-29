import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Feature, FeatureStatus } from '../entities';
export declare class FeatureRepository extends Repository<Feature> {
    saveFeatue(feature: Feature): Promise<Feature>;
    getFeature(status: FeatureStatus, search: string): Promise<Feature[]>;
    getFeatureById(id: string): Promise<Feature>;
    updateStatus(id: string, status: FeatureStatus): Promise<UpdateResult>;
    deleteFeature(id: string): Promise<DeleteResult>;
}
