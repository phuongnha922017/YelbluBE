import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
  } from '@nestjs/common';
  import { NutritionsService } from './nutritions.service';
  
  @Controller('nutritions')
  export class NutritionsController {
    constructor(private readonly service: NutritionsService) {}
  
    @Get()
    async findAll() {
        const res = this.service.findAll()
      return this.service.findAll();
    }

    @Post()
    create(@Body() body: any) {
      return this.service.create(body);
    }
  
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.service.findOne(id);
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
      return this.service.update(id, body);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.service.remove(id);
    }
  }