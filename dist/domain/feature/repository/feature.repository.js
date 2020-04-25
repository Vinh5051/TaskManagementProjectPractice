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
let FeatureRepository = class FeatureRepository extends typeorm_1.Repository {
    async saveFeatue(feature) {
        return await this.save(feature);
    }
    async getFeature(status, search) {
        const query = await this.createQueryBuilder('feature');
        if (status) {
            query.andWhere('feature.status = :status', { status });
        }
        if (search) {
            query.andWhere('feature.name LIKE :search OR feature.description LIKE :search', { search: `%${search}%` });
        }
        return query.leftJoinAndSelect('feature.auth', 'user')
            .leftJoinAndSelect('feature.epic', 'epic')
            .execute();
    }
    async getFeatureById(id) {
        return await this.createQueryBuilder('feature')
            .leftJoinAndSelect('feature.auth', 'user')
            .where('feature.id = :id', { id })
            .getOne();
    }
    async updateStatus(id, status) {
        return await this.createQueryBuilder('feature')
            .update(entities_1.Feature)
            .set({ status })
            .where('feature.id = :id', { id })
            .execute();
    }
    async deleteFeature(id) {
        return await this.createQueryBuilder('feature')
            .delete()
            .from(entities_1.Feature)
            .where('feature.id = :id', { id })
            .execute();
    }
};
FeatureRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Feature)
], FeatureRepository);
exports.FeatureRepository = FeatureRepository;
//# sourceMappingURL=feature.repository.js.map