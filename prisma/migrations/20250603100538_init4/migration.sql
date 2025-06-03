/*
  Warnings:

  - Made the column `calories` on table `Recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "calories" SET NOT NULL;
