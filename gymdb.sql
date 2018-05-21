-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema gymdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `gymdb` ;

-- -----------------------------------------------------
-- Schema gymdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gymdb` DEFAULT CHARACTER SET utf8 ;
USE `gymdb` ;

-- -----------------------------------------------------
-- Table `lift_tracker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lift_tracker` ;

CREATE TABLE IF NOT EXISTS `lift_tracker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `time_in` VARCHAR(45) NULL,
  `time_out` VARCHAR(45) NULL,
  `muscle_group` VARCHAR(45) NULL,
  `reps` INT UNSIGNED NULL,
  `movements` INT UNSIGNED NULL,
  `date` VARCHAR(45) NULL,
  `personal_records_set` VARCHAR(100) NULL,
  `miles_ran` DOUBLE UNSIGNED NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO user@localhost;
 DROP USER user@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'user'@'localhost' IDENTIFIED BY 'user';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'user'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `lift_tracker`
-- -----------------------------------------------------
START TRANSACTION;
USE `gymdb`;
INSERT INTO `lift_tracker` (`id`, `time_in`, `time_out`, `muscle_group`, `reps`, `movements`, `date`, `personal_records_set`, `miles_ran`) VALUES (1, '3:00 PM', '4:42 PM', 'Chest', 150, 6, '5/10/18', 'None', 1);
INSERT INTO `lift_tracker` (`id`, `time_in`, `time_out`, `muscle_group`, `reps`, `movements`, `date`, `personal_records_set`, `miles_ran`) VALUES (2, '12:56 PM', '2:30 PM', 'Back', 200, 8, '5/11/18', 'Did 25 pullups in one set', .8);

COMMIT;
