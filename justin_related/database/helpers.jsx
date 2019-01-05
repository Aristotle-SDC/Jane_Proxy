const faker = require('faker');
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

// randomizer for each track's likes, shares, plays, and comments
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// 100 tracks
const tracks = [];
// 10 artists, albums, and album arts
const artists = [];
const albums = [];
const albumArt = [];

// make it all
for (let i = 0; i < 100; i += 1) {
  if (i < 10) {
    albums.push(`${faker.commerce.product()} ${faker.commerce.product()} ${faker.commerce.product()}`);
    albumArt.push(faker.random.image());
    artists.push(`The ${faker.company.bsAdjective()} ${faker.name.findName()}`);
  }
  tracks.push(faker.company.bs());
}

// add tracks/playlists/albums to db
db.query('SELECT * from tracks', (err, res) => {
  if (err) { return err; }
  if (res.length < 100) {
    for (let i = 0; i < 100; i += 1) {
      db.query(`INSERT INTO tracks (artist, track, album, albumArt, 
        plays, likes, shares, comments) VALUES ('${artists[getRandomInt(9)]}', '${tracks[i]}', 
        '${albums[getRandomInt(9)]}', '${albumArt[getRandomInt(9)]}', ${getRandomInt(800000)}, ${getRandomInt(23000)}, ${getRandomInt(20000)}, ${getRandomInt(4000)})`);
    }
  }
});

const getTracks = (callback) => {
  db.query('SELECT * from tracks', (err, results) => {
    if (err) callback(err, null);
    callback(null, results);
  });
};

const sortTracks = (data) => {
  const currentTrack = data[0];
  const relatedTracks = [];
  const playlists = [];
  for (let i = 1; i < data.length; i += 1) {
    if (data[i].album === currentTrack.album && relatedTracks.length < 3) {
      relatedTracks.push(data[i]);
    } else if (data[i].album === currentTrack.album && relatedTracks.length >= 3 
      && playlists.length < 3) {
      playlists.push(data[i]);
    }
  }
  const filteredData = {
    currTrack: currentTrack,
    relTracks: relatedTracks,
    plists: playlists,
  };
  return filteredData;
};

module.exports = {
  getTracks,
  sortTracks,
};
