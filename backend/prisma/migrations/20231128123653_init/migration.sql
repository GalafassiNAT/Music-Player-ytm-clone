-- AlterTable
ALTER TABLE `artists` MODIFY `about` LONGBLOB NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `about` VARCHAR(191) NULL;
