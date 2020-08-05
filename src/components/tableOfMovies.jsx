import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
import {getGenres} from "../services/fakeGenreService";
import TableOfRowMovies from './tableRowOfMovies';
import Pagination from './pagination';
import ListGroup from './listGroup';

class TableOfMovies extends Component{

    state = {
        tableHeader: [
            {
                label: 'Title',
                key: 'title',
                id: 1
            },
            {
                label: 'Genre',
                key: 'genre',
                id: 2,
            },
            {
                label: 'Stock',
                key: 'stock',
                id: 3
            },
            {
                label: 'Rate',
                key: 'rate',
                id: 4
            }
        ],
        movies: getMovies(),
        backupMovies: getMovies(4),
        genres: getGenres(),
        increment: 4,
        offset: 0,
        hidePagination: false
        // nextButton: false,
        // prevButton: false
    };

    componentDidMount() {
        // if(this.state.offset === 0) {
        //     this.setState({prevButton : true})
        // }

        this.state.genres.forEach(item => {
            item.selected = false;
        });
        //initialize with all genres selected default
        // this.ordonateMoviesByGenres(this.state.genres[0]);
    }

    renderHeader() {
        if(this.state.movies.length === 0) {
            return <h3>Nu sunt produse</h3>
        } else {
            return <h3>Produse : {this.state.backupMovies.length} / {this.state.movies.length}</h3>
        }
    };


    renderTableHeader() {
        return <ul className={this.state.movies.length === 0 ? 'd-none' : 'table__header d-flex'}>
                    {this.state.tableHeader.map(item =>
                            <li key={item.id} className={'table__header-item ' + item.key}>{item.label}</li>
                    )}
                </ul>
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

        this.setState({hidePagination: true});

        let copyMoviesBackup = [...this.state.movies];

        this.state.genres.forEach((genre) => {
            genre.selected = false;
            myItem.selected = true;
        });

        if(myItem.selectAll) {
            this.setState({backupMovies: copyMoviesBackup});
        } else {
            let arrayByGenre = copyMoviesBackup.filter(movie => movie.genre.name === myItem.name.toLowerCase());
            this.setState({backupMovies: arrayByGenre});
        }

    };


    render() {

        return (
            <div>
                <div>
                    {this.renderHeader()}
                    {/*{this.state.movies.length === 0 ? <h3> Nu sunt produse</h3>  : <h3>Produse: {this.state.movies.length}</h3>}*/}
                </div>
                {this.renderTableHeader()}
                <TableOfRowMovies
                    movies={this.state.backupMovies}
                    onDelete={this.handleDelete}
                    onLike={this.handleLike}
                ></TableOfRowMovies>
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
                <ListGroup
                    genres={this.state.genres}
                    onOrdonateMoviesByGenres={this.ordonateMoviesByGenres}
                ></ListGroup>
                {/*{this.renderList()}*/}
                {/*<ul className={this.state.movies.length === 0 ? 'd-none' : "table__header d-flex"}>*/}
                {/*    {this.state.tableHeader.map(item =>*/}
                {/*        <li key={item.key} className={item.key !== 'undefined' ? item.key : "table__header-item"}>{item.label}</li>*/}
                {/*    )}*/}
                {/*</ul>*/}
                {/*<ul>{this.state.movies.map(item =>*/}
                {/*    <li className={item.genre.name + " table__list-item"} key={item._id}>*/}
                {/*        <span>{item.title}</span>*/}
                {/*        <span>{item.numberInStock}</span>*/}
                {/*        <span>{item.genre.name}</span>*/}
                {/*        <span>{item.dailyRentalRate}</span>*/}
                {/*        <button onClick={() => this.handleDelete(item)}>delete</button>*/}
                {/*    </li>)}*/}
                {/*</ul>*/}
            </div>
        )
    }
}

export default TableOfMovies;


