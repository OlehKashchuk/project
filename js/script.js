"use strict";

// Home Work #1

const numberOfFilms = +prompt("How many films do you already saw?", "");

let personalMovieDB = {
    'count': numberOfFilms,
    'movie': {},
    'actors': {},
    'genres': [],
    'privat': false
};

let countOfQuestions = 0;

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

if (personalMovieDB.count < 10) {
    alert("very few movies watched");
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
    alert("you are a classic spectator");
} else if(personalMovieDB.count >= 30){
    alert('you are a movie buff');
}else {
    alert('error');
}

console.log(personalMovieDB);