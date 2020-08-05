import React, {Component} from 'react';
import LikeButton from './likeButton';

class TableOfRowMovies extends Component{


    renderList() {
        return <ul>
            {this.props.movies.map((item, index) =>
                <li key={index} className={item.genre.name + " table__list-item"}>
                    <span>{item.title}</span>
                    <span>{item.numberInStock}</span>
                    <span>{item.genre.name}</span>
                    <span>{item.dailyRentalRate}</span>
                    <LikeButton
                    movie={item}
                    onLikeChild={this.props.onLike}
                ></LikeButton>
                    <button onClick={() => this.props.onDelete(item)}>delete</button>
                </li>
            )}
        </ul>
    }



    render() {
        return (
            <div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        )
    }

}
export default TableOfRowMovies;
