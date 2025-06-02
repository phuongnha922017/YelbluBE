import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NutritionService {
    constructor(private prisma: PrismaService){}
    
}
