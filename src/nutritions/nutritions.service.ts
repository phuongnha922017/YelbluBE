// src/nutritions/nutritions.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class NutritionsService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.NutritionsCreateInput) {
    return this.prisma.nutritions.create({ data });
  }

  findOne(id: number) {
    return this.prisma.nutritions.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.NutritionsUpdateInput) {
    return this.prisma.nutritions.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.nutritions.delete({ where: { id } });
  }
}
