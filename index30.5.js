 if(a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b; // ...информация заносится в объект movies, иначе...
        console.log('done');
    }
    else{
        console.log('error');
        i--; // ...декремент, то есть возвращаемся к вопросам.
    }