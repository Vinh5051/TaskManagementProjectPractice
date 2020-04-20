import { CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class AuthGuard implements CanActivate {
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-access-token'] || request.headers.authorization;

        if (token) {
            const user = this.validateToken(token);
            request.user = user;
        } else {
            throw new HttpException('Auth token is not supplied!', HttpStatus.BAD_REQUEST);
        }
        return true;
    }

    async validateToken(token: string) {
        return new Promise((resolve, rejects) => {
            jwt.verify(token, 'taskManangement', (err, decode) => {
                if (err) {
                    return rejects(new HttpException(err.toString(), HttpStatus.BAD_REQUEST));
                }
                return resolve(decode);
            });
        });
    }
}
