"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
class LoggingInterceptor {
    intercept(context, next) {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        const now = Date.now();
        return next.handle().pipe(operators_1.tap(() => common_1.Logger.log(`${method} ${url} ${Date.now() - now}ms`, context.getClass.name)));
    }
}
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=Logging.interceptor.js.map