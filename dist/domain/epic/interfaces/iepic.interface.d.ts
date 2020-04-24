import { Epic } from '../entities';
import { FilterQueryDto, EpicParamIdDto, UpdateEpicQueryDto } from '../dtos';
import { DeleteResult } from 'typeorm';
export interface IEpicService {
    createEpic(epic: Epic): Promise<Epic>;
    getEpic(filterDto: FilterQueryDto): Promise<Epic[]>;
    getEpicById(epicIdDto: EpicParamIdDto): Promise<Epic>;
    updateEpicStatus(updateEpicDto: UpdateEpicQueryDto): Promise<Epic>;
    deleteEpic(epicIdDto: EpicParamIdDto): Promise<DeleteResult>;
}
