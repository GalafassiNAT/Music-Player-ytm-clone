/*
  Warnings:

  - You are about to alter the column `profilePicture` on the `users` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `profilePicture` VARCHAR(191) NOT NULL;
