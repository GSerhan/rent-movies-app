import React, {Component} from 'react';

class listGroup extends Component{


    render() {
        return (
            <ul className="list-group">
                {/*<li className={"all" ? "list-group-item active" : "list-group-item"}*/}
                {/*    onClick={() => this.props.onOrdonateMoviesByGenres('all', true)}*/}
                {/*>All genres</li>*/}
                {this.props.genres.map((item,index) => {
                    return <li key={item._id}
                               className={item.selected ? "list-group-item active" : "list-group-item"}
                               onClick={() => this.props.onOrdonateMoviesByGenres(item)}
                            >{item.name}</li>

                })}
                {/*<li className="list-group-item active">All genres</li>*/}
                {/*<li className="list-group-item">Action</li>*/}
                {/*<li className="list-group-item">Thriller</li>*/}
                {/*<li className="list-group-item">Comedy</li>*/}
                {/*<li className="list-group-item">Drama</li>*/}
            </ul>
        )
    }

}

export default listGroup;
