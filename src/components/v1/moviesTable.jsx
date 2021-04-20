import React, {Component} from 'react';
import LikeButton from './likeButton';

const tableStyle = {
    maxWidth: '75%'
};

class TableOfRowMovies extends Component{


    renderTableHeader() {
        return (
            <tr className={this.props.movies.length === 0 ? 'd-none' : 'table__header'}>
                {this.props.tableHeader.map( item => {
                    return <th key={item.id} className={'table__header-item ' + item.key}
                            >{item.label}
                            {(item.sortType === 'desc' || typeof item.sortType === 'undefined') && <i className={item.iconAsc + ' cursor-pointer'}
                               onClick={() => this.props.onSort(item, 'asc')}
                            ></i>}
                            {item.sortType === 'asc' && <i className={item.iconDesc + ' cursor-pointer'}
                               onClick={() => this.props.onSort(item, 'desc')}
                            ></i>}
                            </th>
                })}
            </tr>
        )
    };

    renderList() {
        return (
            <tbody>
                {this.props.movies.map((item, index) =>
                    <tr key={index} className={item.genre}>
                        <th>{item.title}</th>
                        <th>{item.numberInStock}</th>
                        <th>{item.genre}</th>
                        <th>{item.dailyRentalRate}</th>
                        <LikeButton
                        movie={item}
                        onLikeChild={this.props.onLike}
                    ></LikeButton>
                        <th>
                            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(item)}>delete</button>
                        </th>
                    </tr>
                )}
            </tbody>
        )
    }



    render() {
        return (
            <table className="table col-9" style={tableStyle}>
                <thead className="table-header_container">
                    {this.renderTableHeader()}
                </thead>
                {this.renderList()}
            </table>
        )
    }

}

export default TableOfRowMovies;
