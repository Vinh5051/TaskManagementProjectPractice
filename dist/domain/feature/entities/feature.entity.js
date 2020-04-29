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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_1 = require("../../user");
const entities_1 = require("../../epic/entities");
var FeatureStatus;
(function (FeatureStatus) {
    FeatureStatus["TODO"] = "TO DO";
    FeatureStatus["IN_PROGRESS"] = "IN PROGRESS";
    FeatureStatus["DONE"] = "DONE";
    FeatureStatus["BUG"] = "BUG";
})(FeatureStatus = exports.FeatureStatus || (exports.FeatureStatus = {}));
let Feature = class Feature extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Feature.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Feature.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Feature.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ default: 0 }),
    __metadata("design:type", Number)
], Feature.prototype, "priority", void 0);
__decorate([
    typeorm_1.Column({ default: FeatureStatus.TODO }),
    __metadata("design:type", String)
], Feature.prototype, "status", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.User),
    __metadata("design:type", user_1.User)
], Feature.prototype, "auth", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_1.User),
    __metadata("design:type", user_1.User)
], Feature.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => entities_1.Epic),
    __metadata("design:type", entities_1.Epic)
], Feature.prototype, "epic", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Feature.prototype, "createat", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Feature.prototype, "updateat", void 0);
Feature = __decorate([
    typeorm_1.Entity()
], Feature);
exports.Feature = Feature;
//# sourceMappingURL=feature.entity.js.map