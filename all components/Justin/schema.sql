DROP DATABASE IF EXISTS fecTracks;

CREATE DATABASE fecTracks;

use fecTracks;

CREATE TABLE tracks (id int NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  artist VARCHAR(100), track VARCHAR(100), album VARCHAR(100), albumArt VARCHAR(100), 
  plays int, likes int, shares int, comments int);

