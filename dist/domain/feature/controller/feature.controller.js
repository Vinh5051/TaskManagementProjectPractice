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
const service_1 = require("../service");
const dto_1 = require("../dto");
const entities_1 = require("../entities");
const domain_1 = require("../..");
const class_transformer_1 = require("class-transformer");
const common_2 = require("../../../common");
let FeatureController = class FeatureController {
    constructor(featureService) {
        this.featureService = featureService;
    }
    async createFeature(user, createFeature) {
        const { epicId } = createFeature;
        return await this.featureService.createFeature(user, epicId, class_transformer_1.plainToClass(entities_1.Feature, createFeature));
    }
    async getFeature(filterQueryDto) {
        return await this.featureService.getFeature(filterQueryDto);
    }
    async getFeatureById(featureQueryIdDto) {
        return await this.featureService.getFeatureById(featureQueryIdDto);
    }
    async updateStatus(updateStatusQueryDto) {
        return await this.featureService.updateStatus(updateStatusQueryDto);
    }
    async deleteFeature(featureQueryDto) {
        return await this.featureService.deleteFeature(featureQueryDto);
    }
    async admitFeature(user, featureQueryDto) {
        return await this.featureService.admitFeature(user, featureQueryDto);
    }
};
__decorate([
    common_1.Post('/create'),
    common_1.UseGuards(common_2.AuthGuard),
    __param(0, common_2.jwt()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [domain_1.User, dto_1.CreateFeatureDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "createFeature", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterQuryDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "getFeature", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FeatureQueryIdDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "getFeatureById", null);
__decorate([
    common_1.Put('/updatestatus/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateStatusQueryDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "updateStatus", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FeatureQueryIdDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "deleteFeature", null);
__decorate([
    common_1.Get('/admit'),
    common_1.UseGuards(common_2.AuthGuard),
    __param(0, common_2.jwt()), __param(1, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [domain_1.User, dto_1.FeatureQueryIdDto]),
    __metadata("design:returntype", Promise)
], FeatureController.prototype, "admitFeature", null);
FeatureController = __decorate([
    common_1.Controller('feature'),
    __metadata("design:paramtypes", [service_1.FeatureService])
], FeatureController);
exports.FeatureController = FeatureController;
//# sourceMappingURL=feature.controller.js.map