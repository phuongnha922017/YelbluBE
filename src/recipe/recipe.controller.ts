import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SuggestRecipeByLabelDto,SuggestRecipeDto } from './dto';
import { RecipeService } from './recipe.service';

@ApiTags('Recipe')
@Controller('recipes')
export class RecipeController {
    constructor(private recipeService: RecipeService) { }

    @ApiOperation({ summary: "API for suggesting recipes based on ingredients's ID" })
    @Post('suggest')
    @ApiBody({ type: SuggestRecipeDto, required: true })
    async suggestRecipe(@Body() dto: SuggestRecipeDto) {
        return await this.recipeService.suggestRecipe(dto);
    };

    @ApiOperation({ summary: "API for suggesting recipes based on ingredients's label" })
    @Post('suggest-label')
    @ApiBody({ type: SuggestRecipeByLabelDto, required: true })
    async suggestRecipeByLabel(@Body() dto: SuggestRecipeByLabelDto) {
        return await this.recipeService.suggestRecipeByLabel(dto);
    };

    @ApiOperation({ summary: "API for getting recipe details by ID" })
    @Get(':recipeId')
    async getRecipeById(@Param('recipeId') recipeId: number) {
        return await this.recipeService.getRecipeById(recipeId);
    }
}
