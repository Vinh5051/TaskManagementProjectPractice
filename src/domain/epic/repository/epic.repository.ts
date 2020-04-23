import { EntityRepository, Repository, UpdateResult, DeleteResult } from 'typeorm';
import { Epic, EpicStatus } from '../entities';

@EntityRepository(Epic)
export class EpicRepository extends Repository<Epic> {
    async createEpic(epic: Epic): Promise<Epic> {
        return this.save(epic);
    }

    async getEpic(status, search): Promise<Epic[]> {
        const query = this.createQueryBuilder('epic');
        if (status) {
            query.orWhere('epic.status LIKE :status', {status});
        }

        if (search) {
            query.orWhere('epic.nameproject LIKE :search OR epic.title LIKE :search OR epic.description LIKE :search', {search: `%${search}%`});
        }
        return await query.getMany();
    }

    async getEpicById(id: string): Promise<Epic> {
        return await this.findOneOrFail(id);
    }

    async updateStatus(id: string, status: EpicStatus): Promise<UpdateResult> {
        return await this.createQueryBuilder('epic')
                    .update(Epic)
                    .set({status})
                    .where('epic.id = :id', {id})
                    .execute();
        // const epic = await this.findOneOrFail(id);
        // epic.status = status;
        // return await epic.save();
    }

    async deleteEpic(id: string): Promise<DeleteResult> {
        return await this.createQueryBuilder('epic')
                            .delete()
                            .from(Epic)
                            .where('epic.id = :id', {id})
                            .execute();
    }

}
