import { EpicRepository } from '../repository';
import { Epic } from '../entities/epic.entity';
import { FilterQueryDto, EpicParamIdDto, UpdateEpicQueryDto } from '../dtos';
import { DeleteResult, UpdateResult } from 'typeorm';
import { User } from 'src/domain/user';
export declare class EpicService {
    private readonly epicRepsitory;
    constructor(epicRepsitory: EpicRepository);
    createEpic(user: User, epic: Epic): Promise<Epic>;
    getEpic(filterQueryDto: FilterQueryDto): Promise<Epic[]>;
    getEpicById(epicParamIdDto: EpicParamIdDto): Promise<Epic>;
    updateEpicStatus(updateEpicQueryDto: UpdateEpicQueryDto): Promise<UpdateResult>;
    deleteEpic(epicParamIdDto: EpicParamIdDto): Promise<DeleteResult>;
}
