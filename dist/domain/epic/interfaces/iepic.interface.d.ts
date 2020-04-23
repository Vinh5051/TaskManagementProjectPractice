import { Epic } from '../entities';
import { FilterDto, EpicIdDto, UpdateEpicDto } from '../dtos';
import { DeleteResult } from 'typeorm';
export interface IEpicService {
    createEpic(epic: Epic): Promise<Epic>;
    getEpic(filterDto: FilterDto): Promise<Epic[]>;
    getEpicById(epicIdDto: EpicIdDto): Promise<Epic>;
    updateEpicStatus(updateEpicDto: UpdateEpicDto): Promise<Epic>;
    deleteEpic(epicIdDto: EpicIdDto): Promise<DeleteResult>;
}
