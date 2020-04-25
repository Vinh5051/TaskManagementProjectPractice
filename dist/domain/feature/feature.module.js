"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const feature_controller_1 = require("./controller/feature.controller");
const feature_service_1 = require("./service/feature.service");
const typeorm_1 = require("@nestjs/typeorm");
const repository_1 = require("./repository");
const repository_2 = require("../epic/repository");
let FeatureModule = class FeatureModule {
};
FeatureModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([repository_1.FeatureRepository, repository_2.EpicRepository])],
        controllers: [feature_controller_1.FeatureController],
        providers: [feature_service_1.FeatureService],
    })
], FeatureModule);
exports.FeatureModule = FeatureModule;
//# sourceMappingURL=feature.module.js.map