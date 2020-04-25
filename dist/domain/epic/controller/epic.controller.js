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
const epic_service_1 = require("../service/epic.service");
const create_epic_dto_1 = require("../dtos/create-epic.dto");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../entities");
const dtos_1 = require("../dtos");
const common_2 = require("../../../common");
const user_1 = require("../../user");
let EpicController = class EpicController {
    constructor(epicService) {
        this.epicService = epicService;
    }
    async createEpic(user, createEpicDto) {
        return this.epicService.createEpic(user, class_transformer_1.plainToClass(entities_1.Epic, createEpicDto));
    }
    async getEpic(filterQueryDto) {
        return await this.epicService.getEpic(filterQueryDto);
    }
    async getEpicById(epicParamIdDto) {
        return await this.epicService.getEpicById(epicParamIdDto);
    }
    async updateStatus(updateEpicQueryDto) {
        return await this.epicService.updateEpicStatus(updateEpicQueryDto);
    }
    async deleteEpic(epicParamIdDto) {
        return await this.epicService.deleteEpic(epicParamIdDto);
    }
};
__decorate([
    common_1.Post('/create'),
    common_1.UseGuards(common_2.AuthGuard),
    __param(0, common_2.jwt()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User, create_epic_dto_1.CreateEpicDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "createEpic", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.FilterQueryDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "getEpic", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.EpicParamIdDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "getEpicById", null);
__decorate([
    common_1.Put('/updatestatus/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateEpicQueryDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "updateStatus", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.EpicParamIdDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "deleteEpic", null);
EpicController = __decorate([
    common_1.Controller('epic'),
    __metadata("design:paramtypes", [epic_service_1.EpicService])
], EpicController);
exports.EpicController = EpicController;
//# sourceMappingURL=epic.controller.js.map