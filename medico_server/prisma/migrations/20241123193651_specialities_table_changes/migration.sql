/*
  Warnings:

  - Added the required column `description` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "specialties" ADD COLUMN     "description" TEXT NOT NULL;
