import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SuggestRecipeDto } from './dto';
import { RecipeService } from './recipe.service';

@ApiTags('Recipe')
@Controller('recipes')
export class RecipeController {
    constructor(private recipeService: RecipeService) { }

    @ApiOperation({ summary: "API for suggesting recipes based on user's ingredients" })
    @Post('suggest')
    @ApiBody({ type: SuggestRecipeDto, required: true })
    async suggestRecipe(@Body() dto: SuggestRecipeDto) {
        return await this.recipeService.suggestRecipe(dto);
    };

    @ApiOperation({ summary: "API for getting recipe details by ID" })
    @Get(':recipeId')
    async getRecipeById(@Param('recipeId') recipeId: number) {
        return await this.recipeService.getRecipeById(recipeId);
    }
}
