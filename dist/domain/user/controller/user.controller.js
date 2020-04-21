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
const user_service_1 = require("../service/user.service");
const class_transformer_1 = require("class-transformer");
const create_user_dto_1 = require("../dtos/create-user.dto");
const entities_1 = require("../entities");
const user_credentials_dto_1 = require("../dtos/user-credentials.dto");
const common_2 = require("../../../common");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async signUp(createUserDto) {
        return await this.userService.signUp(class_transformer_1.plainToClass(entities_1.User, createUserDto));
    }
    async lognIn(userCredentials) {
        return await this.userService.logIn(userCredentials);
    }
    test(user) {
        return user;
    }
};
__decorate([
    common_1.Post('/signup'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signUp", null);
__decorate([
    common_1.Post('/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_credentials_dto_1.UserCredentials]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "lognIn", null);
__decorate([
    common_1.Post('/test'),
    common_1.UseGuards(common_2.AuthGuard),
    __param(0, common_2.jwt()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", Object)
], UserController.prototype, "test", null);
UserController = __decorate([
    common_1.Controller('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map