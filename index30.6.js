
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
} else {
        console.log('Произошла ошибка');
}