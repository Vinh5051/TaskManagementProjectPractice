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
var EpicStatus;
(function (EpicStatus) {
    EpicStatus["TODO"] = "TO DO";
    EpicStatus["IN_PROGRESS"] = "IN PROGRESS";
    EpicStatus["DONE"] = "DONE";
    EpicStatus["BUG"] = "BUG";
})(EpicStatus = exports.EpicStatus || (exports.EpicStatus = {}));
let Epic = class Epic extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", String)
], Epic.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Epic.prototype, "nameproject", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Epic.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Epic.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ default: EpicStatus.TODO }),
    __metadata("design:type", String)
], Epic.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Epic.prototype, "createat", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Epic.prototype, "updateat", void 0);
Epic = __decorate([
    typeorm_1.Entity()
], Epic);
exports.Epic = Epic;
//# sourceMappingURL=epic.entity.js.map