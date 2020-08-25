import React, {Component} from 'react';
import LikeButton from './likeButton';

class TableOfRowMovies extends Component{




    renderTableHeader() {
        return (
            <ul className={this.props.movies.length === 0 ? 'd-none' : 'table__header d-flex align-items-center justify-content-between'}>
                {this.props.tableHeader.map( item => {
                    return <li key={item.id} className={'table__header-item ' + item.key}
                            >{item.label}
                            {(item.sortType === 'desc' || typeof item.sortType === 'undefined') && <i className={item.iconAsc + ' cursor-pointer'}
                               onClick={() => this.props.onSort(item, 'asc')}
                            ></i>}
                            {item.sortType === 'asc' && <i className={item.iconDesc + ' cursor-pointer'}
                               onClick={() => this.props.onSort(item, 'desc')}
                            ></i>}
                            </li>
                })}
            </ul>
        )
    };

    renderList() {
        return (
            <ul>
                {this.props.movies.map((item, index) =>
                    <li key={index} className={item.genre + " table__list-item d-flex align-items-center justify-content-between"}>
                        <span>{item.title}</span>
                        <span>{item.numberInStock}</span>
                        <span>{item.genre}</span>
                        <span>{item.dailyRentalRate}</span>
                        <LikeButton
                        movie={item}
                        onLikeChild={this.props.onLike}
                    ></LikeButton>
                        <button onClick={() => this.props.onDelete(item)}>delete</button>
                    </li>
                )}
            </ul>
        )
    }



    render() {
        return (
            <div>
                <div className={"table-header_container"}>
                    {this.renderTableHeader()}
                </div>
                <div className={"table-content_container"}>
                    {this.renderList()}
                </div>
            </div>
        )
    }

}
export default TableOfRowMovies;
