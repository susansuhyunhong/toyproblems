-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Students'
-- ---

DROP TABLE IF EXISTS `Students`;

CREATE TABLE `Students` (
  `STUDENT_ID` INTEGER NOT NULL AUTO_INCREMENT,
  `STUDENT_NAME` VARCHAR(50) DEFAULT NULL,
  `GENDER` CHAR DEFAULT NULL,
  `DEPT_ID` INTEGER(50),
  PRIMARY KEY (`STUDENT_ID`)
);

-- ---
-- Table 'Departments'
-- ---

DROP TABLE IF EXISTS `Departments`;

CREATE TABLE `Departments` (
  `DEPT_ID` INTEGER NOT NULL AUTO_INCREMENT,
  `DEPT_NAME` VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (`DEPT_ID`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Students` ADD FOREIGN KEY (DEPT_ID) REFERENCES `Departments` (`DEPT_ID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Students` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Departments` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Students` (`STUDENT_ID`,`STUDENT_NAME`,`GENDER`,`DEPT_ID`) VALUES
-- ('','','','');
-- INSERT INTO `Departments` (`DEPT_ID`,`DEPT_NAME`) VALUES
-- ('','');