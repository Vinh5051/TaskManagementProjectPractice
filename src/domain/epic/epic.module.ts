import { Module } from '@nestjs/common';
import { EpicController } from './controller/epic.controller';
import { EpicService } from './service/epic.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpicRepository } from './repository/epic.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EpicRepository])],
  controllers: [EpicController],
  providers: [EpicService],
})
export class EpicModule {}
