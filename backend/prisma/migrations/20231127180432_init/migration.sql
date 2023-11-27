/*
  Warnings:

  - Added the required column `duration` to the `playlists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `playlists` ADD COLUMN `duration` INTEGER NOT NULL;
