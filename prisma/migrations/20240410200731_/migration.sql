/*
  Warnings:

  - The `name` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `description` column on the `Project` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "name",
ADD COLUMN     "name" TEXT[],
DROP COLUMN "description",
ADD COLUMN     "description" TEXT[];
