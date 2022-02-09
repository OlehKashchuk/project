"use strict";

// Home Work #1

const numberOfFilms = +prompt("How many films do you already saw?", "");

    let a = prompt("One of the last watched movies?", ""),
        b = prompt("How much will you rate the film?", ""),
        c = prompt("How much will you rate the film?", ""),
        d = prompt("How much will you rate the film?", "");

let personalMovieDB = {
    'count': numberOfFilms,
    'movie': {},
    'actors': {},
    'genres': [],
    'privat': false
};
personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;
console.log(personalMovieDB);