"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.InjectEpic = common_1.createParamDecorator((_, req) => req.epic);
//# sourceMappingURL=epic.decorator.js.map