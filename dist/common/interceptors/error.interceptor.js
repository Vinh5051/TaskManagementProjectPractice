"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
class ErrorInterceptor {
    intercept(context, next) {
        return next.handle().pipe(operators_1.catchError(error => rxjs_1.throwError(new common_1.BadRequestException())));
    }
}
exports.ErrorInterceptor = ErrorInterceptor;
//# sourceMappingURL=error.interceptor.js.map