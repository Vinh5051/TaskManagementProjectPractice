import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FeatureRepository} from '../repository';
import {IFeatureService} from '../interfaces';
import {User} from 'src/domain';
import {Feature} from '../entities';
import {FeatureQueryIdDto, UpdateStatusQueryDto, FilterQuryDto, CreateFeatureDto} from '../dto';
import {UpdateResult, DeleteResult} from 'typeorm';
import { EpicRepository } from '../../epic/repository';

@Injectable()
export class FeatureService implements IFeatureService {
    constructor(
        @InjectRepository(FeatureRepository)
        private readonly featureRepository: FeatureRepository,
        private readonly epicRepository: EpicRepository,
    ) {}

    async createFeature(user: User, epicId: string, feature: Feature): Promise<Feature> {
        feature.auth = user;
        const epic = await this.epicRepository.getEpicById(epicId);
        feature.epic = epic;
        return await this.featureRepository.saveFeatue(feature);
    }

    async getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]> {
        const { staus, search } = filterQueryDto;
        return await this.featureRepository.getFeature(staus, search);
    }

    async getFeatureById(featureQueryIdDto: FeatureQueryIdDto): Promise<Feature> {
        const { id } = featureQueryIdDto;
        return await this.featureRepository.getFeatureById(id);
    }

    async updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult> {
        const { id, status } = updateStatusQueryDto;
        return await this.featureRepository.updateStatus(id, status);
    }

    async deleteFeature(featureQueryIdDto: FeatureQueryIdDto): Promise<DeleteResult> {
        const  id = featureQueryIdDto.id;
        return await this.featureRepository.deleteFeature(id);
    }

    async admitFeature(user: User, featureQueryDto: FeatureQueryIdDto): Promise<Feature> {
        const { id } = featureQueryDto;
        const feature = await this.featureRepository.getFeatureById(id);
        feature.user = user;
        return await this.featureRepository.saveFeatue(feature);
    }
}
