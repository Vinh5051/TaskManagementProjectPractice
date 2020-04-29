import {IsOptional, IsNotEmpty} from 'class-validator';

export class FeatureParamIdDto {
    @IsOptional()
    @IsNotEmpty()
    featureId: string;
}
