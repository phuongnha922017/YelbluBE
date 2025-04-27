import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NutritionService } from './nutrition/nutrition.service';
import { NutritionController } from './nutrition/nutrition.controller';
import { NutritionModule } from './nutrition/nutrition.module';

@Module({
  imports: [NutritionModule],
  controllers: [AppController, NutritionController],
  providers: [AppService, NutritionService],
})
export class AppModule {}
