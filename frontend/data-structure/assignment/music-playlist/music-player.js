/*
IdCamp : 2121510
Name   : Muhammad Rifqi Setiawan
*/
const Song = require('./song')
const Playlist = require('./playlist')

// Comment module.export to test code
module.exports = class MusicPlayer {
    constructor(playlist) {
        this.playlist = playlist
    }

    //Method  yang mebambahkan lagu pada playlist
    addSong(song) {
        // TODO: answer here
        let AddLagu = this.playlist.songs.push(song);
        return AddLagu;
    }   

    // Method memutar lagu pada playlist
    play() {
        // TODO: answer here
        let kosong = this.playlist.isEmpty();
        let ulang = this.playlist.isRepeatable;
        let lagu = this.playlist.songs.shift();

        // Mengecek apakah playlist kosong atau tidak
        if (kosong) {
            return "";
        } else {
            // Mengecek apakah playlist bisa diulang atau tidak
            if (ulang === true) {
                this.addSong(lagu);
            }
            // Mengembalikan lagu yang sedang diputar saat ini. 
            return `Now Playing ${lagu.singer} - ${lagu.title}`;
           
        }
    }
}

/* Uncomment line 45 - 68 to test code */ 

// let playlist = new Playlist([], false)
// const player = new MusicPlayer(playlist)
// player.addSong(new Song("Tulus", "Hati-Hati di Jalan"))
// player.addSong(new Song("TREASURE", "DARARI"))
// player.addSong(new Song("NIKI", "Every Summertime"))
// player.addSong(new Song("Pamungkas", "To The Bone"))

//  Output lagu pertama 
// console.log(player.play()); // Now Playing Tulus - Hati-Hati di Jalan

//  Output Lagu selanjutnya
// player.play()
// let play = player.play()
// console.log(play) // Now Playing TREASURE - DARARI




