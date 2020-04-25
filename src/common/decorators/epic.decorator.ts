import { createParamDecorator } from '@nestjs/common';
import { Epic } from '../../domain/epic/entities/epic.entity';

export const InjectEpic = createParamDecorator((_, req): Epic => req.epic);
