"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.jwt = common_1.createParamDecorator((_, req) => req.user);
//# sourceMappingURL=jwt.decorator.js.map