import { EpicRepository } from '../repository';
import { Epic } from '../entities/epic.entity';
import { FilterDto, EpicIdDto, UpdateEpicDto } from '../dtos';
import { DeleteResult, UpdateResult } from 'typeorm';
export declare class EpicService {
    private readonly epicRepsitory;
    constructor(epicRepsitory: EpicRepository);
    createEpic(epic: Epic): Promise<Epic>;
    getEpic(filterDto: FilterDto): Promise<Epic[]>;
    getEpicById(epicIdDto: EpicIdDto): Promise<Epic>;
    updateEpicStatus(updateEpicDto: UpdateEpicDto): Promise<UpdateResult>;
    deleteEpic(epicIdDto: EpicIdDto): Promise<DeleteResult>;
}
