-- @block
SELECT * FROM Players;

-- @block
CREATE TABLE Positions(
  id VARCHAR(255) PRIMARY KEY,
  playerPosition VARCHAR(255) 
);

-- @block
INSERT INTO positions (id,playerPosition)
VALUES 
('GK','Goalkeeper'),
('DF','Defender'),
('MD','Midfielder'),
('ST','Striker');


-- @block
INSERT INTO players (firstName,surname,bio,DOB,height,apps,goals,assits,minutesPlayed,yellowCards,redCards,position)
VALUES ('Steven','Dougall','Bio:','1991-11-04','1.8','0','0','0','0','0','0','DF');

-- @block 
ALTER TABLE players ADD FOREIGN KEY (position) REFERENCES Positions(id);