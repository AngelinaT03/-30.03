const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
          b = prompt('На сколько оцените его?');   
/* Если пользователь:
    - оставил пустым одно из полей для ввода ИЛИ
    - нажал Отмена ИЛИ
    - название фильма больше 50 символов, то... 
*/      
    if(a == '' || b == '' || a == null || b == null || a.length > 50) {
        console.log('error');
        i--;      // ...декремент и...
        continue; // ...продолжаем цикл, то есть возвращаемся к вопросам, иначе...
    }
    console.log('done');
    personalMovieDB.movies[a] = b; // ...информация заносится в объект movies.
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
} else {
        console.log('Произошла ошибка');
}