import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NutritionsService } from './nutritions/nutritions.service';
import { NutritionsController } from './nutritions/nutritions.controller';

@Module({
  imports: [],
  controllers: [AppController, FavoritesController, NutritionsController],
  providers: [AppService, FavoritesService, NutritionsService],
})
export class AppModule {}
