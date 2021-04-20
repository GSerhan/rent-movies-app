import React, {Component} from 'react';
import {getMovies} from '../../services/fakeMovieService';
import {getGenres} from "../../services/fakeGenreService";
import MoviesTable from './moviesTable';
import Pagination from './pagination';
import ListGroup from './listGroup';

class Movies extends Component{

    state = {
        tableHeader: [
            {
                label: 'Title',
                key: 'title',
                id: 1,
                iconAsc:'fa fa-sort-up',
                iconDesc:'fa fa-sort-down'
            },
            {
                label: 'Stock',
                key: 'numberInStock',
                id: 3,
                iconAsc:'fa fa-sort-up',
                iconDesc:'fa fa-sort-down'
            },
            {
                label: 'Genre',
                key: 'genre',
                id: 2,
                iconAsc:'fa fa-sort-up',
                iconDesc:'fa fa-sort-down'
            },
            {
                label: 'Rate',
                key: 'dailyRentalRate',
                id: 4,
                iconAsc:'fa fa-sort-up',
                iconDesc:'fa fa-sort-down'
            },
            {
                label: 'Likes',
                key: 'like',
                id: 5,
            },
            {
                label: 'Delete',
                key: 'delete',
                id: 6,
            },
        ],
        movies: [],
        backupMovies: [],
        genres: [],
        increment: 4,
        offset: 0,
        hidePagination: false
        // nextButton: false,
        // prevButton: false
    };

    componentDidMount() {

        const genres = [{_id: '1', name: 'All Genres'}, ...getGenres()];

        this.setState({movies: getMovies(), backupMovies: getMovies(4), genres: genres});

        this.state.genres.forEach(item => {
            item.selected = false;
        });
    }

    renderHeader() {
        if(this.state.movies.length === 0) {
            return <h3>Nu sunt produse</h3>
        } else {
            return <h3>Produse : {this.state.backupMovies.length} / {this.state.movies.length}</h3>
        }
    };


    handleDelete = (object) => {

        let copyMovies = [...this.state.movies];
        let copyMoviesBackup = [...this.state.backupMovies];


        let index = copyMovies.findIndex(i => i === object);
        let indexBackup = copyMoviesBackup.findIndex(i => i === object);


        copyMovies.splice(index, 1);
        copyMoviesBackup.splice(indexBackup, 1);


        this.setState({movies: copyMovies});
        this.setState({backupMovies: copyMoviesBackup});

    };

    handleLike = (object) => {

        let copyMovies = [...this.state.movies];

        let myObject = copyMovies.find(item => item === object);

        myObject.like = !myObject.like;

        this.setState({movies: copyMovies});

    };

    paginate = (pageNumber) => {

        let copyMovies = [...this.state.movies];

        this.setState({offset: (pageNumber - 1) * this.state.increment}, () => {
            // if((this.state.movies.length - this.state.increment) < this.state.offset) {
            //     this.setState({nextButton:  true});
            //     this.setState({prevButton: false});
            // } else {
            //     this.setState({nextButton:  false});
            // }
        });

        copyMovies = copyMovies.slice((pageNumber - 1) * this.state.increment, pageNumber * this.state.increment);


        this.setState({backupMovies: copyMovies});

    };

    paginateNext = () => {

        if((this.state.movies.length - this.state.increment) < this.state.offset) {
            return false;
        }

        this.setState({offset: this.state.offset + this.state.increment}, () => {
            let copyMoviesBackup = [...this.state.movies];

            copyMoviesBackup = copyMoviesBackup.slice(this.state.offset, this.state.offset + this.state.increment);

            // if((this.state.movies.length - this.state.increment) < this.state.offset) {
            //     this.setState({nextButton:  true});
            // } else {
            //     this.setState({nextButton:  false});
            // }
            //
            // this.setState({prevButton : false});

            this.setState({backupMovies: copyMoviesBackup});
        });


    };
    paginatePrevious = () => {

        if(this.state.offset === 0) {
            return false;
        }

        this.setState({offset: this.state.offset - this.state.increment}, () => {
            // if(this.state.offset === 0) {
            //     this.setState({prevButton : true})
            // }

        });

        // this.setState({nextButton : false});

        let copyMoviesBackup = [...this.state.movies];

        copyMoviesBackup = copyMoviesBackup.slice(this.state.offset - this.state.increment, this.state.offset);


        this.setState({backupMovies: copyMoviesBackup});


    };

    ordonateMoviesByGenres = (myItem) => {

        let allMoviesBackup = [...this.state.movies];
        let firstMovies = allMoviesBackup.slice(0, this.state.increment);


        this.state.genres.forEach((genre) => {
            genre.selected = false;
            myItem.selected = true;
        });

        if(myItem.name === 'All Genres') {
            myItem.selectAll = true;
        }

        if(myItem.selectAll) {
            this.setState({backupMovies: firstMovies, offset: 0, hidePagination: false});
        } else {
            let arrayByGenre = allMoviesBackup.filter(movie => movie.genre === myItem.name.toLowerCase());
            this.setState({backupMovies: arrayByGenre, hidePagination: true});
        }

    };

    handleSort = (item, sortType) => {


        let localMovies = [...this.state.backupMovies];

        //sort string

        localMovies.sort(function (a, b) {
            if(typeof a[item.key] === "string" && sortType === 'asc') {
                item.sortType = sortType;
                if (a[item.key].toLowerCase() < b[item.key].toLowerCase()) {
                    return -1;
                }

                if (a[item.key].toLowerCase() > b[item.key].toLowerCase()) {
                    return 1;
                }

                return 0;
            } else if(typeof a[item.key] === "string" && sortType === 'desc') {
                item.sortType = sortType;
                if (b[item.key].toLowerCase() < a[item.key].toLowerCase()) {
                    return -1;
                }

                if (b[item.key].toLowerCase() > a[item.key].toLowerCase()) {
                    return 1;
                }

                return 0;
            } else if(sortType === 'asc') {
                item.sortType = sortType;
                //sort numbers
               return a[item.key] - b[item.key]
            } else {
                item.sortType = sortType;
                return b[item.key] - a[item.key]
            }

        });

        this.setState({backupMovies: localMovies});
    };


    render() {

        return (
            <div>
                {this.renderHeader()}
                <div className="d-flex align-items-center justify-content-between">
                    <ListGroup
                        genres={this.state.genres}
                        onOrdonateMoviesByGenres={this.ordonateMoviesByGenres}
                    ></ListGroup>
                    <MoviesTable
                        tableHeader={this.state.tableHeader}
                        movies={this.state.backupMovies}
                        onDelete={this.handleDelete}
                        onLike={this.handleLike}
                        onSort={this.handleSort}
                    ></MoviesTable>
                </div>
                {!this.state.hidePagination &&
                <Pagination
                    movies={this.state.movies}
                    offset={this.state.offset}
                    increment={this.state.increment}
                    onPaginate={this.paginate}
                    onPaginateNext={this.paginateNext}
                    onPaginatePrevious={this.paginatePrevious}
                ></Pagination>
                }
            </div>
        )
    }
}

export default Movies;


