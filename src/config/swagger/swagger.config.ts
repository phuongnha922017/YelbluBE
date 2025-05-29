import { DocumentBuilder } from "@nestjs/swagger";

export const swaggerConfig = new DocumentBuilder()
    .setTitle("SuggestMeal")
    .setDescription("SuggestMeal API description")
    .setVersion("1.0")
    .build();
