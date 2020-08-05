import React, {Component} from 'react';

class Pagination extends Component{


    render() {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={this.props.offset === 0 ? "page-item disabled" : "page-item"}
                        onClick={() => this.props.onPaginatePrevious()}>
                        <span className="page-link">Previous</span>
                    </li>
                    <li className={this.props.offset === 0 ? 'page-item active' : 'page-item'}
                        onClick={() => this.props.onPaginate(1)}>
                        <span className="page-link">1</span>
                    </li>
                    <li className={this.props.offset === this.props.increment ? 'page-item active' : 'page-item'}
                        onClick={() => this.props.onPaginate(2)}>
                        <span className="page-link">2</span>
                    </li>
                    <li className={this.props.offset === this.props.increment * 2 ? 'page-item active' : 'page-item'}
                        onClick={() => this.props.onPaginate(3)}>
                        <span className="page-link">3</span>
                    </li>
                    <li className={((this.props.movies.length - this.props.increment) < this.props.offset) ? "page-item disabled" : 'page-item'}
                        onClick={() => this.props.onPaginateNext()}>
                        <span className="page-link">Next</span>
                    </li>
                </ul>
            </nav>
        )
    }

}

export default Pagination;
