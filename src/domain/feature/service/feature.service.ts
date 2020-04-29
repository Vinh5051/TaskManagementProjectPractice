import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {FeatureRepository} from '../repository';
import {IFeatureService} from '../interfaces';
import {User} from 'src/domain';
import {Feature} from '../entities';
import {FeatureParamIdDto, UpdateStatusQueryDto, FilterQuryDto, CreateFeatureDto} from '../dto';
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
        return await this.featureRepository.save(feature);
    }

    async getFeature(filterQueryDto: FilterQuryDto): Promise<Feature[]> {
        const { staus, search } = filterQueryDto;
        return await this.featureRepository.getFeature(staus, search);
    }

    async getFeatureById(featureQueryIdDto: FeatureParamIdDto): Promise<Feature> {
        const { featureId } = featureQueryIdDto;
        return await this.featureRepository.getFeatureById(featureId);
    }

    async updateStatus(updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult> {
        const { id, status } = updateStatusQueryDto;
        return await this.featureRepository.updateStatus(id, status);
    }

    async deleteFeature(featureQueryIdDto: FeatureParamIdDto): Promise<DeleteResult> {
        const { featureId } = featureQueryIdDto;
        return await this.featureRepository.deleteFeature(featureId);
    }

    async admitFeature(user: User, featureQueryIdDto: FeatureParamIdDto): Promise<Feature> {
        const { featureId } = featureQueryIdDto;
        const feature = await this.featureRepository.getFeatureById(featureId);
        feature.user = user;
        return await this.featureRepository.save(feature);
    }
}
