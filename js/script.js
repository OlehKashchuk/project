"use strict";

// Home Work #1

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many films do you already saw?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films do you already saw?", "");
    }
}
start();

let personalMovieDB = {
    'count': numberOfFilms,
    'movie': {},
    'actors': {},
    'genres': [],
    'privat': false
};

let countOfQuestions = 0;



function rememberMyFilms() {
    while (countOfQuestions < 2) {
        let a = prompt("One of the last watched movies?", ""),
            b = prompt("How much will you rate the film?", "");
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movie[a] = b;
            countOfQuestions++;
        } else {
            console.log('error');
        }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("very few movies watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("you are a classic spectator");
    } else if (personalMovieDB.count >= 30) {
        alert('you are a movie buff');
    } else {
        alert('error');
    }
}

detectPersonalLevel();
console.log(personalMovieDB);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Your favorite genres under number #${i+1} : `);
    }
}
writeYourGenres();