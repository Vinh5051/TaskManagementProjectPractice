"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("../repository");
const domain_1 = require("../..");
const repository_2 = require("../../epic/repository");
let FeatureService = class FeatureService {
    constructor(featureRepository, epicRepository) {
        this.featureRepository = featureRepository;
        this.epicRepository = epicRepository;
    }
    async createFeature(user, epicId, feature) {
        feature.auth = user;
        const epic = await this.epicRepository.getEpicById(epicId);
        feature.epic = epic;
        return await this.featureRepository.save(feature);
    }
    async getFeature(filterQueryDto) {
        const { staus, search } = filterQueryDto;
        return await this.featureRepository.getFeature(staus, search);
    }
    async getFeatureById(featureQueryIdDto) {
        const { featureId } = featureQueryIdDto;
        return await this.featureRepository.getFeatureById(featureId);
    }
    async updateStatus(updateStatusQueryDto) {
        const { id, status } = updateStatusQueryDto;
        return await this.featureRepository.updateStatus(id, status);
    }
    async deleteFeature(featureQueryIdDto) {
        const { featureId } = featureQueryIdDto;
        return await this.featureRepository.deleteFeature(featureId);
    }
    async admitFeature(user, featureQueryIdDto) {
        const { featureId } = featureQueryIdDto;
        const feature = await this.featureRepository.getFeatureById(featureId);
        feature.user = user;
        return await this.featureRepository.save(feature);
    }
};
FeatureService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(repository_1.FeatureRepository)),
    __metadata("design:paramtypes", [repository_1.FeatureRepository,
        repository_2.EpicRepository])
], FeatureService);
exports.FeatureService = FeatureService;
//# sourceMappingURL=feature.service.js.map