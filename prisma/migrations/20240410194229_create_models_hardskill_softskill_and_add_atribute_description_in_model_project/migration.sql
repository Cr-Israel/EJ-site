/*
  Warnings:

  - You are about to drop the column `hardskills` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `softkills` on the `Student` table. All the data in the column will be lost.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "hardskills",
DROP COLUMN "softkills";

-- CreateTable
CREATE TABLE "Hardskill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "Hardskill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Softskill" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "studentId" TEXT,

    CONSTRAINT "Softskill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Hardskill" ADD CONSTRAINT "Hardskill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Softskill" ADD CONSTRAINT "Softskill_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE SET NULL ON UPDATE CASCADE;
