import { Module } from '@nestjs/common';
import { NutritionsService } from './nutritions.service';
import { NutritionsController } from './nutritions.controller';

@Module({})
export class NutritionsModule {
      providers: [NutritionsService],
      controllers: [NutritionsController]
}
