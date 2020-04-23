"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const controller_1 = require("./controller");
const service_1 = require("../main/service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("../config/typeorm.config");
const user_module_1 = require("../domain/user/user.module");
const common_2 = require("../common");
const core_1 = require("@nestjs/core");
const epic_module_1 = require("../domain/epic/epic.module");
const providers = [
    {
        provide: core_1.APP_FILTER,
        useClass: common_2.HttpExceptionFilter,
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: common_2.LoggingInterceptor,
    },
    {
        provide: core_1.APP_INTERCEPTOR,
        useClass: common_2.ErrorInterceptor,
    },
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            user_module_1.UserModule,
            epic_module_1.EpicModule,
        ],
        controllers: [controller_1.AppController],
        providers: [
            service_1.AppService,
            ...providers,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map