import { Module } from '@nestjs/common';
import { FeatureController } from './controller/feature.controller';
import { FeatureService } from './service/feature.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {FeatureRepository} from './repository';
import {EpicRepository} from '../epic/repository';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureRepository, EpicRepository])],
  controllers: [FeatureController],
  providers: [FeatureService],
})
export class FeatureModule {}
