import { EntityRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';
import {Feature, FeatureStatus} from '../entities';
import { HttpException, HttpStatus } from '@nestjs/common';

@EntityRepository(Feature)
export class FeatureRepository extends Repository<Feature> {

    async saveFeatue(feature: Feature): Promise<Feature> {
        return await this.save(feature);
    }

    async getFeature(status: FeatureStatus, search: string): Promise<Feature[]> {
        const query = await this.createQueryBuilder('feature');

        if (status) {
            query.andWhere('feature.status = :status', {status});
        }
        if (search) {
            query.andWhere('feature.name LIKE :search OR feature.description LIKE :search', {search: `%${search}%`});
        }

        return await query.leftJoinAndSelect('feature.auth', 'user')
                    // .leftJoinAndSelect('feature.user', 'user')
                    .leftJoinAndSelect('feature.epic', 'epic')
                    .getMany();
    }

    async getFeatureById(id: string): Promise<Feature> {
        const feature = await this.createQueryBuilder('feature')
                            .leftJoinAndSelect('feature.auth', 'user')
                            // .leftJoinAndSelect('feature.user', 'user')
                            .leftJoinAndSelect('feature.epic', 'epic')
                            .where('feature.id = :id', {id})
                            .getOne();

        if (feature && feature == null) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        if (feature) {
            return feature;
        }

        throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);
    }

    async updateStatus(id: string, status: FeatureStatus): Promise<UpdateResult> {
        const feature = await this.createQueryBuilder('feature')
                            .update(Feature)
                            .set({status})
                            .where('feature.id = :id', {id})
                            .execute();

        if (feature.affected === 0 ) {
            throw new HttpException(`Feature with ID "${id}" was not found!`, HttpStatus.NOT_FOUND);
        }

        return feature;
    }

    async deleteFeature(id: string): Promise<DeleteResult> {
        const feature =  await this.createQueryBuilder('feature')
                            .delete()
                            .from(Feature)
                            .where('feature.id = :id', {id})
                            .execute();

        if (feature.affected === 0 ) {
            throw new HttpException(`Feature with ID "${id}" was not found!`, HttpStatus.NOT_FOUND);
        }

        return feature;
    }

}
