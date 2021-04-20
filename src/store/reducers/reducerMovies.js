const movies = [
    {
        _id: "5b21ca3eeb7f6fbccd471815",
        title: "Terminator",
        genre: "action",
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        title: "Die Hard",
        genre: "action",
        numberInStock: 5,
        dailyRentalRate: 2.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        title: "Get Out",
        genre: "action",
        numberInStock: 8,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        title: "Trip to Italy",
        genre: "comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        title: "Airplane",
        genre: "comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        title: "Wedding Crashers",
        genre: "comedy",
        numberInStock: 7,
        dailyRentalRate: 3.5,
        like: true
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        title: "Gone Girl",
        genre: "thriller",
        numberInStock: 7,
        dailyRentalRate: 4.5,
        like: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        title: "The Sixth Sense",
        genre: "thriller",
        numberInStock: 4,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        title: "The Avengers",
        genre: "action",
        numberInStock: 7,
        dailyRentalRate: 3.5
    },
    {
        _id: "5b21ca3eeb7f6fbccd471822",
        title: "Batman",
        genre: "action",
        numberInStock: 7,
        dailyRentalRate: 3.5
    }
];

const genres = [
    // { _id: "5b21ca3eeb7f6fbccd471819", name: "All Genres", selectAll: true},
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471821", name: "Drama" }
];


const state2 = {
    movies: movies,
    genres: genres
};



export default function reducerMovies(state, action) {
        if(typeof state == 'undefined') {
            state = state2;
        }
        if(action.type === 'showStore') {
            return {...state};
        } else if (action.type === 'likeMovie') {
            // const copyMovies = [...state.movies];
            console.log('state.movies', state.movies);
            const selectedMovie = state.movies.find(item => item.title === action.payload.description.title);
            console.log('selectedMovie', selectedMovie);
            selectedMovie.like = !selectedMovie.like;
            return {...state};
        }
}


