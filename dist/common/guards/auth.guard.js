"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
class AuthGuard {
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-token'] || request.headers.authorization;
        if (token) {
            const user = this.validateToken(token);
            request.user = user;
        }
        else {
            throw new common_1.HttpException('Auth token is not supplied!', common_1.HttpStatus.BAD_REQUEST);
        }
        return true;
    }
    async validateToken(token) {
        return new Promise((resolve, rejects) => {
            jwt.verify(token, 'taskManangement', (err, decode) => {
                if (err) {
                    return rejects(new common_1.HttpException(err.toString(), common_1.HttpStatus.BAD_REQUEST));
                }
                return resolve(decode);
            });
        });
    }
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map