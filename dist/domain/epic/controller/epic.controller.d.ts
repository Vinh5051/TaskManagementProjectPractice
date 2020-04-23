import { EpicService } from '../service/epic.service';
import { CreateEpicDto } from '../dtos/create-epic.dto';
import { Epic } from '../entities';
import { FilterDto, EpicIdDto, UpdateEpicDto } from '../dtos';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class EpicController {
    private readonly epicService;
    constructor(epicService: EpicService);
    createEpic(createEpicDto: CreateEpicDto): Promise<Epic>;
    getEpic(filterDto: FilterDto): Promise<Epic[]>;
    getEpicById(epicIdDto: EpicIdDto): Promise<Epic>;
    updateStatus(updateEpicDto: UpdateEpicDto): Promise<UpdateResult>;
    deleteEpic(epicIdDto: EpicIdDto): Promise<DeleteResult>;
}
