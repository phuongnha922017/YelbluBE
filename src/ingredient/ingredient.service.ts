import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IngredientService {
    constructor(private prisma: PrismaService) { }

    async getAllIngredients() {
        return await this.prisma.$queryRaw`SELECT * FROM "GroupedIngredient"`;
    }
}
