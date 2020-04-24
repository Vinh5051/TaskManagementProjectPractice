"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const entities_1 = require("../entities");
let EpicRepository = class EpicRepository extends typeorm_1.Repository {
    async createEpic(epic) {
        return this.save(epic);
    }
    async getEpic(status, search) {
        const query = this.createQueryBuilder('epic');
        if (status) {
            query.orWhere('epic.status = :status', { status });
        }
        if (search) {
            query.orWhere('epic.nameproject LIKE :search OR epic.title LIKE :search OR epic.description LIKE :search', { search: `%${search}%` });
        }
        return await query.getMany();
    }
    async getEpicById(id) {
        return await this.findOneOrFail(id);
    }
    async updateStatus(id, status) {
        return await this.createQueryBuilder('epic')
            .update(entities_1.Epic)
            .set({ status })
            .where('epic.id = :id', { id })
            .execute();
    }
    async deleteEpic(id) {
        return await this.createQueryBuilder('epic')
            .delete()
            .from(entities_1.Epic)
            .where('epic.id = :id', { id })
            .execute();
    }
};
EpicRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Epic)
], EpicRepository);
exports.EpicRepository = EpicRepository;
//# sourceMappingURL=epic.repository.js.map