"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const epic_controller_1 = require("./controller/epic.controller");
const epic_service_1 = require("./service/epic.service");
const typeorm_1 = require("@nestjs/typeorm");
const epic_repository_1 = require("./repository/epic.repository");
let EpicModule = class EpicModule {
};
EpicModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([epic_repository_1.EpicRepository])],
        controllers: [epic_controller_1.EpicController],
        providers: [epic_service_1.EpicService],
    })
], EpicModule);
exports.EpicModule = EpicModule;
//# sourceMappingURL=epic.module.js.map