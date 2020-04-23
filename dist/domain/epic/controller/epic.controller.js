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
let EpicController = class EpicController {
    constructor(epicService) {
        this.epicService = epicService;
    }
    async createEpic(createEpicDto) {
        return this.epicService.createEpic(class_transformer_1.plainToClass(entities_1.Epic, createEpicDto));
    }
    async getEpic(filterDto) {
        return await this.epicService.getEpic(filterDto);
    }
    async getEpicById(epicIdDto) {
        return await this.epicService.getEpicById(epicIdDto);
    }
    async updateStatus(updateEpicDto) {
        return await this.epicService.updateEpicStatus(updateEpicDto);
    }
    async deleteEpic(epicIdDto) {
        return await this.epicService.deleteEpic(epicIdDto);
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_epic_dto_1.CreateEpicDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "createEpic", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.FilterDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "getEpic", null);
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.EpicIdDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "getEpicById", null);
__decorate([
    common_1.Patch('/updatestatus/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.UpdateEpicDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "updateStatus", null);
__decorate([
    common_1.Delete('/delete/'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.EpicIdDto]),
    __metadata("design:returntype", Promise)
], EpicController.prototype, "deleteEpic", null);
EpicController = __decorate([
    common_1.Controller('epic'),
    __metadata("design:paramtypes", [epic_service_1.EpicService])
], EpicController);
exports.EpicController = EpicController;
//# sourceMappingURL=epic.controller.js.map