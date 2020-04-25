import { EntityRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';
import {Feature, FeatureSatsus} from '../entities';

@EntityRepository(Feature)
export class FeatureRepository extends Repository<Feature> {

    async saveFeatue(feature: Feature): Promise<Feature> {
        return await this.save(feature);
    }

    async getFeature(status: FeatureSatsus, search: string): Promise<Feature[]> {
        const query = await this.createQueryBuilder('feature');

        if (status) {
            query.andWhere('feature.status = :status', {status});
        }
        if (search) {
            query.andWhere('feature.name LIKE :search OR feature.description LIKE :search', {search: `%${search}%`});
        }

        return query.leftJoinAndSelect('feature.auth', 'user')
                    .leftJoinAndSelect('feature.epic', 'epic')
                    .execute();
    }

    async getFeatureById(id: string): Promise<Feature> {
        return await this.createQueryBuilder('feature')
                            .leftJoinAndSelect('feature.auth', 'user')
                            .where('feature.id = :id', {id})
                            .getOne();

    }

    async updateStatus(id: string, status: FeatureSatsus): Promise<UpdateResult> {
        return await this.createQueryBuilder('feature')
                            .update(Feature)
                            .set({status})
                            .where('feature.id = :id', {id})
                            .execute();
    }

    async deleteFeature(id: string): Promise<DeleteResult> {
        return await this.createQueryBuilder('feature')
                            .delete()
                            .from(Feature)
                            .where('feature.id = :id', {id})
                            .execute();
    }

}
