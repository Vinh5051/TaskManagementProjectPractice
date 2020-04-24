import {EpicStatus} from '../entities';
import {IsOptional, IsIn, IsString, IsNotEmpty} from 'class-validator';

export class FilterQueryDto {
    @IsOptional()
    @IsIn([EpicStatus.TODO, EpicStatus.IN_PROGRESS, EpicStatus.DONE, EpicStatus.BUG])
    status: EpicStatus;

    @IsOptional()
    @IsString()
    search: string;

}
