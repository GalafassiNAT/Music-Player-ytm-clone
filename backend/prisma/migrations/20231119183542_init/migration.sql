/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `likes` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `moods` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `playlistsongs` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `songgenres` table. All the data in the column will be lost.
  - You are about to drop the column `AlbumId` on the `songs` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `userplaylists` table. All the data in the column will be lost.
  - Added the required column `duration` to the `albums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `histories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `albumId` to the `songs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `songs` DROP FOREIGN KEY `songs_AlbumId_fkey`;

-- AlterTable
ALTER TABLE `albums` ADD COLUMN `duration` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `histories` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `likes` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `moods` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `playlistsongs` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `songgenres` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `songs` DROP COLUMN `AlbumId`,
    ADD COLUMN `albumId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `userplaylists` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `songs` ADD CONSTRAINT `songs_albumId_fkey` FOREIGN KEY (`albumId`) REFERENCES `albums`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
