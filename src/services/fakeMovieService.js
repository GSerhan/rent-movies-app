import * as genresAPI from "./fakeGenreService";

const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "action" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "action" },
        numberInStock: 5,
        dailyRentalRate: 2.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "thriller" },
        numberInStock: 8,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "comedy" },
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "thriller" },
        numberInStock: 7,
        dailyRentalRate: 4.5,
        like: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "thriller" },
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "action" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "Batman",
        genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "action" },
        numberInStock: 7,
        dailyRentalRate: 3.5
    }
];

export function getMovies(noMovies = false) {
    let copyMovies = [];
    if(noMovies) {
        copyMovies = movies.slice(0, noMovies);
        return copyMovies;
    } else {
        return movies;
    }
}

export function getMovie(id) {
    return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
    let movieInDb = movies.find(m => m._id === movie._id) || {};
    movieInDb.name = movie.name;
    movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
    movieInDb.numberInStock = movie.numberInStock;
    movieInDb.dailyRentalRate = movie.dailyRentalRate;

    if (!movieInDb._id) {
        movieInDb._id = Date.now();
        movies.push(movieInDb);
    }

    return movieInDb;
}

export function deleteMovie(id) {
    let movieInDb = movies.find(m => m._id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
}
