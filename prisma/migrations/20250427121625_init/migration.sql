/*
  Warnings:

  - You are about to drop the `Dishes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Nutritions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Dishes";

-- DropTable
DROP TABLE "Nutritions";

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumnail" TEXT,
    "videoLinks" TEXT,
    "instruction_step" TEXT,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrition" (
    "id" SERIAL NOT NULL,
    "datatime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "caloriesIn" INTEGER NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id")
);
