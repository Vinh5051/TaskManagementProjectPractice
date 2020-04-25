import { Injectable, Controller } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { EpicRepository } from '../repository';
import { Epic, EpicStatus } from '../entities/epic.entity';
import {FilterQueryDto, EpicParamIdDto, UpdateEpicQueryDto} from '../dtos';
import {DeleteResult, UpdateResult} from 'typeorm';
import {User} from 'src/domain/user';

@Injectable()
export class EpicService {
    constructor(
        @InjectRepository(EpicRepository)
        private readonly epicRepsitory: EpicRepository,
    ) {}

    async createEpic(user: User, epic: Epic): Promise<Epic> {
        epic.idauth = user;
        return await this.epicRepsitory.createEpic(epic);
    }

    async getEpic(filterQueryDto: FilterQueryDto): Promise<Epic[]> {
        const { status, search } = filterQueryDto;
        return await this.epicRepsitory.getEpic(status, search);
    }

    async getEpicById(epicParamIdDto: EpicParamIdDto): Promise<Epic> {
        const id = epicParamIdDto.id;
        return await this.epicRepsitory.getEpicById(id);
    }

    async updateEpicStatus(updateEpicQueryDto: UpdateEpicQueryDto): Promise<UpdateResult> {
        const { id, status } = updateEpicQueryDto;
        return await this.epicRepsitory.updateStatus(id, status);
    }

    async deleteEpic(epicParamIdDto: EpicParamIdDto): Promise<DeleteResult> {
        const id = epicParamIdDto.id;
        return await this.epicRepsitory.deleteEpic(id);
    }

}
