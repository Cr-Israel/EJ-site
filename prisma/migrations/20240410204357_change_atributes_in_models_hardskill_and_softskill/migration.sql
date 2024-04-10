/*
  Warnings:

  - You are about to drop the column `description` on the `Hardskill` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Softskill` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hardskill" DROP COLUMN "description";

-- AlterTable
ALTER TABLE "Softskill" DROP COLUMN "description";
