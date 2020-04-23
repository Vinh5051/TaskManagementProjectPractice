import {EpicStatus} from '../entities';
import { IsOptional, IsString, IsEnum, IsIn } from 'class-validator';

export class UpdateEpicDto {
    @IsOptional()
    @IsString()
    id: string;

    @IsIn([EpicStatus.TODO, EpicStatus.IN_PROGRESS, EpicStatus.DONE, EpicStatus.BUG])
    status: EpicStatus;
}
