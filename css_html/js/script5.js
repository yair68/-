"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '')


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

    
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    personalMovieDB.movies[a] = b;

    if(a != null && b != null && a != '' && b != '' && a.length < 20 && b.length < 20) {
        personalMovieDB.movies[a] = b;
        console.log(true);
    } else {
        console.log(false);
        i--;
    }
}



console.log(personalMovieDB);