// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorNames = moviesArray.map(function (element) {
    return element.director;
  });
  return directorNames;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const spielbergDrama = moviesArray.filter(function (movieGenre) {
    return (
      moviesArray.director === "Steven Spielberg" &&
      movieGenre.genre.includes("Drama")
    );
  });
  return spielbergDrama.length;
}
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0.0;
  }

  const movieList = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );
  if (movieList.length === 0) {
    return 0.0;
  }
  const totalScore = movieList.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / movieList.length;

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScore = dramaMovies.reduce(
    (acc, movie) => acc + movie.score,
    0
  );

  const averageScore = (totalScore / dramaMovies.length)

  return averageScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
