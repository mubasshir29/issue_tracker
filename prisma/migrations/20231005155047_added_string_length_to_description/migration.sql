/*
  Warnings:

  - Added the required column `comments` to the `Issue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Issue` ADD COLUMN `comments` VARCHAR(500) NOT NULL,
    MODIFY `description` VARCHAR(500) NOT NULL;
