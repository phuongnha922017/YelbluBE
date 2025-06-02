import { Injectable, OnModuleDestroy,OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL,
                },
            },
        });
    }

    async onModuleInit() {
        try {
            await this.$connect();
            console.log("Prisma connected to the database successfully");
        } catch (error) {
            console.error("Error connecting to the database", error);
            process.exit(1);
        }
    }

    async onModuleDestroy() {
        try {
            await this.$disconnect();
            console.log("Prisma disconnected from the database successfully");
        } catch (error) {
            console.error("Error disconnecting from the database", error);
        }
    }
}
