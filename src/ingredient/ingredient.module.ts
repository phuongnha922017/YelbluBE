import { Module } from '@nestjs/common';
import { IngredientService } from './ingredient.service';
import { IngredientController } from './ingredient.controller';

@Module({
  providers: [IngredientService],
  controllers: [IngredientController]
})
export class IngredientModule {}
