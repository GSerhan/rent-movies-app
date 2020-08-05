import React, {Component} from 'react';

class LikeButton extends Component {

    render() {
        return (
            <span onClick={() => this.props.onLikeChild(this.props.movie)}>
                {this.props.movie.like ? <i className="fa fa-heart cursor-pointer"></i> : <i className="fa fa-heart-o cursor-pointer"></i>}
            </span>

        )
    }

}

export default LikeButton;
