/*
  Warnings:

  - You are about to drop the `Docs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `historyData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Docs";

-- DropTable
DROP TABLE "historyData";

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);
