import React, {Component} from 'react';
import store from "../../../store/store";

const likeButton2 = (props) => {
    return(
        <div className="cursor-pointer" onClick = {() => props.onLike(props.movie)}>
            {props.movie.like ? <i className="fa fa-heart"></i> : !props.movie.like && <i className="fa fa-heart-o"></i>}
        </div>
    )
};


// class likeButton2 extends Component {
//     render() {
//         return(
//             <div className="cursor-pointer" onClick = {() => this.props.onLike(this.props.movie)}>
//                 {this.props.movie.like ? <i className="fa fa-heart"></i> : !this.props.movie.like && <i className="fa fa-heart-o"></i>}
//             </div>
//         )
//     }
// }

export default likeButton2;
