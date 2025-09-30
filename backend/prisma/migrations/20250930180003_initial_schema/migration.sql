/*
  Warnings:

  - You are about to drop the column `jobClassification` on the `Teacher` table. All the data in the column will be lost.
  - You are about to drop the column `roleType` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `category` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "jobClassification",
DROP COLUMN "roleType",
ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL;
