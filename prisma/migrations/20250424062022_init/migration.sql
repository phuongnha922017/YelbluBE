-- CreateTable
CREATE TABLE "Dishes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "thumnail" TEXT[],
    "videoLinks" TEXT[],
    "instruction_step" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Dishes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutritions" (
    "id" SERIAL NOT NULL,
    "datatime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "caloriesIn" INTEGER NOT NULL,
    "fat" DOUBLE PRECISION NOT NULL,
    "protein" DOUBLE PRECISION NOT NULL,
    "carbs" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Nutritions_pkey" PRIMARY KEY ("id")
);
