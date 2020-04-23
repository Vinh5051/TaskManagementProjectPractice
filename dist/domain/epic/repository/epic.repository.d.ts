import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Epic, EpicStatus } from '../entities';
export declare class EpicRepository extends Repository<Epic> {
    createEpic(epic: Epic): Promise<Epic>;
    getEpic(status: any, search: any): Promise<Epic[]>;
    getEpicById(id: string): Promise<Epic>;
    updateStatus(id: string, status: EpicStatus): Promise<UpdateResult>;
    deleteEpic(id: string): Promise<DeleteResult>;
}
