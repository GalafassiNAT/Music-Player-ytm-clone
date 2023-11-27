/*
  Warnings:

  - The primary key for the `artistsongs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `artistsongs` table. All the data in the column will be lost.
  - The primary key for the `followers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `followers` table. All the data in the column will be lost.
  - The primary key for the `likes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `likes` table. All the data in the column will be lost.
  - The primary key for the `playlistsongs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `playlistsongs` table. All the data in the column will be lost.
  - The primary key for the `songgenres` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `songgenres` table. All the data in the column will be lost.
  - The primary key for the `songhistories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `songhistories` table. All the data in the column will be lost.
  - The primary key for the `songmoods` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `songmoods` table. All the data in the column will be lost.
  - The primary key for the `useralbums` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `useralbums` table. All the data in the column will be lost.
  - The primary key for the `userplaylists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `userplaylists` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `artistsongs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `playlistsongs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `songgenres` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `songhistories` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `songmoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `useralbums` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `userplaylists` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `artistsongs` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`artistId`, `songId`);

-- AlterTable
ALTER TABLE `followers` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`userId`, `artistId`);

-- AlterTable
ALTER TABLE `likes` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`userId`, `songId`);

-- AlterTable
ALTER TABLE `playlistsongs` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`playlistId`, `songId`);

-- AlterTable
ALTER TABLE `songgenres` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`songId`, `genreId`);

-- AlterTable
ALTER TABLE `songhistories` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`songId`, `historyId`);

-- AlterTable
ALTER TABLE `songmoods` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`songId`, `moodId`);

-- AlterTable
ALTER TABLE `useralbums` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`userId`, `albumId`);

-- AlterTable
ALTER TABLE `userplaylists` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD PRIMARY KEY (`userId`, `playlistId`);
