/*
  Warnings:

  - You are about to alter the column `image` on the `albums` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `profilePicture` on the `artists` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - You are about to alter the column `image` on the `playlists` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.
  - Added the required column `cover` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `albums` MODIFY `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `artists` MODIFY `profilePicture` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `playlists` MODIFY `image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `songs` ADD COLUMN `cover` VARCHAR(191) NOT NULL;
