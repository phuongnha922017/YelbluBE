import { ApiProperty } from "@nestjs/swagger";
import { ArrayNotEmpty, IsArray, IsInt, IsString } from "class-validator";

export class SuggestRecipeDto {
    @ApiProperty({ type: [Number], description: "List of ingredient IDs user has", required: true, example: [1, 2, 3] })
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    ingredientIds: number[];
}

export class SuggestRecipeByLabelDto {
    @ApiProperty({ type: [String], description: "List of ingredient labels user has", required: true, example: ["chicken", "rice", "broccoli"] })
    @IsArray()
    @ArrayNotEmpty()
    @IsString({ each: true })
    ingredientLabels: string[];
}