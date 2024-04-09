-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "hardskills" TEXT[],
    "softkills" TEXT[],
    "projects" TEXT[],

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
