import { createParamDecorator } from '@nestjs/common';
import { User } from '../../domain/user/entities/user.entity';

export const jwt = createParamDecorator((_, req): User => req.user);
