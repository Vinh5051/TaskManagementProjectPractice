import { Controller, Post, Get, Body, Query, Param, Patch, Delete } from '@nestjs/common';
import { EpicService } from '../service/epic.service';
import { CreateEpicDto } from '../dtos/create-epic.dto';
import { plainToClass } from 'class-transformer';
import {Epic, EpicStatus} from '../entities';
import {FilterDto, EpicIdDto, UpdateEpicDto} from '../dtos';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('epic')
export class EpicController {
    constructor(private readonly epicService: EpicService) {}

    @Post('/create')
    async createEpic(@Body() createEpicDto: CreateEpicDto): Promise<Epic> {
        return this.epicService.createEpic(plainToClass(Epic, createEpicDto));
    }

    @Get('/')
    async getEpic(@Query() filterDto: FilterDto): Promise<Epic[]> {
        return await this.epicService.getEpic(filterDto);
    }

    @Post('/')
    async getEpicById(@Query() epicIdDto: EpicIdDto): Promise<Epic> {
        return await this.epicService.getEpicById(epicIdDto);
    }

    @Patch('/updatestatus/')
    async updateStatus(@Query() updateEpicDto: UpdateEpicDto): Promise<UpdateResult> {
        return await this.epicService.updateEpicStatus( updateEpicDto);
    }

    @Delete('/delete/')
    async deleteEpic(@Query() epicIdDto: EpicIdDto): Promise<DeleteResult> {
        return await this.epicService.deleteEpic(epicIdDto);
    }

}
