import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { IngredientService } from './ingredient.service';

@ApiTags('Ingredient')
@Controller('ingredients')
export class IngredientController {
    constructor(private ingredientService: IngredientService) {}

    @ApiOperation({ summary: "API for getting all ingredients" })
    @Get()
    async getAllIngredients() {
        return await this.ingredientService.getAllIngredients();
    }
}
