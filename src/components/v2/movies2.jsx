import React, {Component} from 'react';
import LikeButton2 from "./common/likeButton2";
import Pagination from "./common/pagination2";
import { paginate } from "../../utils/paginate";
import { getMovies } from "../../services/fakeMovieService";
import store from "../../store/store";

class Movies2 extends Component {

    state = {
        movies: store.getState().movies,
        pageSize: 4
    };

    handleDelete = (movie) => {

        //first method
        // const index = this.state.movies.findIndex(item => item === movie);
        // const duplicateMovies = [...this.state.movies];
        // duplicateMovies.splice(index,1);

        //second method
        const duplicateMovies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies: duplicateMovies});
    };

    handleLike = (movie) => {
        store.dispatch({
            type: 'likeMovie',
            payload: {
                description: movie
            }
        });
    };

    handlePageChange = (page) => {
        console.log(page);
    };

    render() {

        const count = this.state.movies.length;
        const {movies: allMovies, pageSize, currentPage} = this.state;

        if(count === 0) {
            return <p>There is no movies in the database.</p>;
        }

        const movies = paginate(allMovies, currentPage, pageSize);

        return(
            <React.Fragment>
                <p>Showing {movies.length} movies in the database.</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <LikeButton2
                                    movie={movie}
                                    onLike={this.handleLike}
                                />
                            </td>
                            <td>
                                <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <Pagination
                    itemsCount={count}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>
        )
    }
}
export default Movies2;
