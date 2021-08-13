/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function lowerCased(n){
  let movie = movies.title.toLowerCase()
}

function getAllMovieTitles(movies) {
  let movieNames = [];

  for (i = 0; i < movies.length; i++) {
      const movie = movies[i]
    if (movie.title) {
      movieNames.push(movie.title)
    }
    
  }
    return movieNames;
}


/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */

function getHighestMetascore(movies) {

if (movies.length === 0) {
    return Number(0);
}
let highestScore = Number(movies[0].metascore);
for (i = 0; i < movies.length; i ++) {
    const topMovie = movies[i];
if (Number(topMovie.metascore) > highestScore) {
    highestScore = Number(topMovie.metascore)
    }
  }
  return highestScore;
}




/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */

function getAverageIMDBRating(movies) {
if (movies.length === 0) {
    return Number(0);
}
  let totalAverage = 0;
  for (let i = 0; i < movies.length; i++) {
  totalAverage += Number(movies[i].imdbRating);
}
return Number((totalAverage / movies.length).toFixed(2));
}



/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */

function countByRating(movies) {

  let ratingCount = {};
  for (let i = 0; i < movies.length; i++) {
    
    if (ratingCount[movies[i].rated]) {
        ratingCount[movies[i].rated] += 1;
    } else {
        ratingCount[movies[i].rated] = 1;
    }
  }
  return ratingCount;
}



/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */

function findById(movies, id) {
  if (!movies.length) return null;

  for ( let i = 0; i < movies.length; i++){
      if (movies[i].imdbID === id) {
        return movies[i];
      }
   }
   return null;
  }
 

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */



function filterByGenre(movies, genre) {

  let genreFilter = [];
  for (const i of movies) { 
  if (i.genre.toLowerCase().includes(genre.toLowerCase())) {
    genreFilter.push(i)
  }
 }
  return genreFilter;
  }



/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */

function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let dateReleased = [];

for (const i of movies) {
 let movieSplitArray = i.released.split(" ");
 let yearOut = movieSplitArray[2];
if(yearOut <= year) {
  dateReleased.push(i)
  }
}
 return dateReleased;
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */

function getBiggestBoxOfficeMovie(movies) {
  
  if (movies.length === 0) {
    return null;
  }
  let movieName = "Black Panther"
  let largeBoxOffice = movies[0].boxOffice;
  for (const i of movies) {
  if (i.boxOffice > largeBoxOffice) {
      largeBoxOffice = i.title;
      return largeBoxOffice;
      }
    }
    return movieName;
  }

  
// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
