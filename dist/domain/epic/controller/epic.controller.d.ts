import { EpicService } from '../service/epic.service';
import { CreateEpicDto } from '../dtos/create-epic.dto';
import { Epic } from '../entities';
import { FilterQueryDto, EpicParamIdDto, UpdateEpicQueryDto } from '../dtos';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from 'src/domain/user';
export declare class EpicController {
    private readonly epicService;
    constructor(epicService: EpicService);
    createEpic(user: User, createEpicDto: CreateEpicDto): Promise<Epic>;
    getEpic(filterQueryDto: FilterQueryDto): Promise<Epic[]>;
    getEpicById(epicParamIdDto: EpicParamIdDto): Promise<Epic>;
    updateStatus(updateEpicQueryDto: UpdateEpicQueryDto): Promise<UpdateResult>;
    deleteEpic(epicParamIdDto: EpicParamIdDto): Promise<DeleteResult>;
}
