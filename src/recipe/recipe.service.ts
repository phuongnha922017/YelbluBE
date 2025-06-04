import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

import { SuggestRecipeByLabelDto, SuggestRecipeDto } from './dto';

@Injectable()
export class RecipeService {
    constructor(private prisma: PrismaService) { }

    async suggestRecipe(dto: SuggestRecipeDto) {
        return this.prisma.recipe.findMany({
            where: {
                recipeIngredients: {
                    some: {
                        ingredientId: {
                            in: dto.ingredientIds
                        }
                    }
                }
            },
            select: {
                id: true,
                recipeName: true,
                totalTime: true,
                calories: true,
                shortDescription: true,
                imageUrl: true,
            }
        })
    }

    async suggestRecipeByLabel(dto: SuggestRecipeByLabelDto) {
        return this.prisma.recipe.findMany({
            where: {
                recipeIngredients: {
                    some: {
                        ingredient: {
                            label: {
                                in: dto.ingredientLabels
                            }
                        }
                    }
                }
            },
            select: {
                id: true,
                recipeName: true,
                totalTime: true,
                calories: true,
                shortDescription: true,
                imageUrl: true,
            }
        })
    }

    async getRecipeById(recipeId: number) {
        const recipe = await this.prisma.recipe.findUnique({
            where: { id: recipeId },
            select: {
                id: true,
                recipeName: true,
                totalTime: true,
                calories: true,
                carbs: true,
                protein: true,
                fat: true,
                description: true,
                instructions: true,
                imageUrl: true,
                recipeIngredients: {
                    select: {
                        ingredient: {
                            select: {
                                label: true,
                            }
                        },
                        amount: true,
                        unit: {
                            select: {
                                label: true,
                            }
                        }
                    }
                }
            }
        })
        if (!recipe) {
            throw new NotFoundException(`Recipe with ID ${recipeId} not found`);
        }
        return recipe;
    }
}
