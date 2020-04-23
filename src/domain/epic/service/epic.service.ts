import { Injectable, Controller } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { EpicRepository } from '../repository';
import { Epic, EpicStatus } from '../entities/epic.entity';
import {FilterDto, EpicIdDto, UpdateEpicDto} from '../dtos';
import {DeleteResult, UpdateResult} from 'typeorm';

@Injectable()
export class EpicService {
    constructor(
        @InjectRepository(EpicRepository)
        private readonly epicRepsitory: EpicRepository,
    ) {}

    async createEpic(epic: Epic): Promise<Epic> {
        return this.epicRepsitory.createEpic(epic);
    }

    async getEpic(filterDto: FilterDto): Promise<Epic[]> {
        const { status, search } = filterDto;
        return this.epicRepsitory.getEpic(status, search);
    }

    async getEpicById(epicIdDto: EpicIdDto): Promise<Epic> {
        const id = epicIdDto.id;
        return await this.epicRepsitory.getEpicById(id);
    }

    async updateEpicStatus(updateEpicDto: UpdateEpicDto): Promise<UpdateResult> {
        const { id, status } = updateEpicDto;
        return await this.epicRepsitory.updateStatus(id, status);
    }

    async deleteEpic(epicIdDto: EpicIdDto): Promise<DeleteResult> {
        const id = epicIdDto.id;
        return await this.epicRepsitory.deleteEpic(id);
    }

}
