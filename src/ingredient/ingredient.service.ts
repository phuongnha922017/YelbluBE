import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientService {
    constructor(private prisma: PrismaService) {}

    async getAllIngredients() {
        return this.prisma.ingredient.findMany({
        })
    }
}
