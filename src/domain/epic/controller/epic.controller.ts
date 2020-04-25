import { Controller, Post, Get, Body, Query, Param, Patch, Delete, UseGuards, Put } from '@nestjs/common';
import { EpicService } from '../service/epic.service';
import { CreateEpicDto } from '../dtos/create-epic.dto';
import { plainToClass } from 'class-transformer';
import {Epic, EpicStatus} from '../entities';
import {FilterQueryDto, EpicParamIdDto, UpdateEpicQueryDto} from '../dtos';
import { UpdateResult, DeleteResult } from 'typeorm';
import {AuthGuard, jwt} from 'src/common';
import { User } from 'src/domain/user';

@Controller('epic')
export class EpicController {
    constructor(private readonly epicService: EpicService) {}

    @Post('/create')
    @UseGuards(AuthGuard)
    async createEpic(@jwt() user: User , @Body() createEpicDto: CreateEpicDto): Promise<Epic> {
        return this.epicService.createEpic(user, plainToClass(Epic, createEpicDto));
    }

    @Get('/')
    async getEpic(@Query() filterQueryDto: FilterQueryDto): Promise<Epic[]> {
        return await this.epicService.getEpic(filterQueryDto);
    }

    @Post('/')
    async getEpicById(@Param() epicParamIdDto: EpicParamIdDto): Promise<Epic> {
        return await this.epicService.getEpicById(epicParamIdDto);
    }

    @Put('/updatestatus/')
    async updateStatus(@Query() updateEpicQueryDto: UpdateEpicQueryDto): Promise<UpdateResult> {
        return await this.epicService.updateEpicStatus( updateEpicQueryDto);
    }

    @Delete('/')
    async deleteEpic(@Param() epicParamIdDto: EpicParamIdDto): Promise<DeleteResult> {
        return await this.epicService.deleteEpic(epicParamIdDto);
    }

}
