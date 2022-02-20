-- @block
CREATE TABLE Players(
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName VARCHAR(255) NOT NULL,
  surname VARCHAR(255) NOT NULL,
  bio TEXT,
  DOB DATE,
  height FLOAT,
  apps TINYINT,
  goals TINYINT,
  assits TINYINT,
  minutesPlayed INT,
  yellowCards TINYINT,
  redCards TINYINT,
  position CHAR);
-- @block
SHOW TABLES;

-- @block 
CREATE TABLE Positions(
  id VARCHAR NOT NULL PRIMARY KEY,
  playerPosition VARCHAR
);