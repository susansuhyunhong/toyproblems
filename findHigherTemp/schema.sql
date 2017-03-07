-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'dailytemp'
--
-- ---

DROP TABLE IF EXISTS `dailytemp`;

CREATE TABLE `dailytemp` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `date` DATE NULL DEFAULT NULL,
  `temp` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `dailytemp` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `dailytemp` (`id`,`date`,`temp`) VALUES
-- ('','','');