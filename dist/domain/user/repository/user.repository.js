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
const bcrypt = require("bcrypt");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async signUp(user) {
        user.salt = await bcrypt.genSalt();
        user.password = await user.hashPassword(user.password, user.salt);
        return this.save(user);
    }
    async lognIn(userCredentials) {
        const { email, password } = userCredentials;
        const user = await this.findOne({ email });
        if (user && user.validatePassword(password)) {
            return user;
        }
        else {
            return null;
        }
    }
};
UserRepository = __decorate([
    typeorm_1.EntityRepository(entities_1.User)
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map