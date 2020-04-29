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
const common_1 = require("@nestjs/common");
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
        return await query.leftJoinAndSelect('feature.auth', 'user')
            .leftJoinAndSelect('feature.epic', 'epic')
            .getMany();
    }
    async getFeatureById(id) {
        const feature = await this.createQueryBuilder('feature')
            .leftJoinAndSelect('feature.auth', 'user')
            .leftJoinAndSelect('feature.epic', 'epic')
            .where('feature.id = :id', { id })
            .getOne();
        if (feature && feature == null) {
            throw new common_1.HttpException('Not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (feature) {
            return feature;
        }
        throw new common_1.HttpException('FORBIDDEN', common_1.HttpStatus.FORBIDDEN);
    }
    async updateStatus(id, status) {
        const feature = await this.createQueryBuilder('feature')
            .update(entities_1.Feature)
            .set({ status })
            .where('feature.id = :id', { id })
            .execute();
        if (feature.affected === 0) {
            throw new common_1.HttpException(`Feature with ID "${id}" was not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return feature;
    }
    async deleteFeature(id) {
        const feature = await this.createQueryBuilder('feature')
            .delete()
            .from(entities_1.Feature)
            .where('feature.id = :id', { id })
            .execute();
        if (feature.affected === 0) {
            throw new common_1.HttpException(`Feature with ID "${id}" was not found!`, common_1.HttpStatus.NOT_FOUND);
        }
        return feature;
    }
};
FeatureRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.Feature)
], FeatureRepository);
exports.FeatureRepository = FeatureRepository;
//# sourceMappingURL=feature.repository.js.map