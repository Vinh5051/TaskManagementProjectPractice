import { Controller, Post, Body, Get, Query, Param, Put, UseGuards, Delete } from '@nestjs/common';
import {FeatureService} from '../service';
import {CreateFeatureDto, FilterQuryDto, FeatureQueryIdDto, UpdateStatusQueryDto} from '../dto';
import {Feature} from '../entities';
import { User } from 'src/domain';
import { plainToClass } from 'class-transformer';
import { jwt, AuthGuard } from 'src/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import {query} from 'express';

@Controller('feature')
export class FeatureController {
    constructor(private readonly featureService: FeatureService) {}

    @Post('/create')
    @UseGuards(AuthGuard)
    async createFeature(@jwt() user: User, @Body() createFeature: CreateFeatureDto): Promise<Feature> {
        const { epicId } = createFeature;
        return await this.featureService.createFeature(user, epicId, plainToClass(Feature, createFeature));
    }

    @Get('/')
    async getFeature(@Query() filterQueryDto: FilterQuryDto): Promise<Feature[]> {
        return await this.featureService.getFeature(filterQueryDto);
    }

    @Post('/')
    async getFeatureById(@Query() featureQueryIdDto: FeatureQueryIdDto): Promise<Feature> {
        return await this.featureService.getFeatureById(featureQueryIdDto);
    }

    @Put('/updatestatus/')
    async updateStatus(@Query() updateStatusQueryDto: UpdateStatusQueryDto): Promise<UpdateResult> {
        return await this.featureService.updateStatus(updateStatusQueryDto);
    }

    @Delete('/')
    async deleteFeature(@Query() featureQueryDto: FeatureQueryIdDto): Promise<DeleteResult> {
        return await this.featureService.deleteFeature(featureQueryDto);
    }

    @Get('/admit')
    @UseGuards(AuthGuard)
    async admitFeature(@jwt() user: User, @Query() featureQueryDto: FeatureQueryIdDto): Promise<Feature> {
        return await this.featureService.admitFeature(user, featureQueryDto);
    }

}
