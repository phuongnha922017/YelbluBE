import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsInt } from "class-validator";

export class SuggestRecipeDto {
    @ApiProperty({ type: [Number], description: "List of ingredient IDs user has", required: true, example: [1, 2, 3] })
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    ingredientIds: number[];
}