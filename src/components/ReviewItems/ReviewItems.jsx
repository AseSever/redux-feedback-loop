import React, { Component } from 'react';

class ReviewItems extends Component {

    render() {
        console.log(this.props.item);
        return(
            <>
                    {this.props.item.feeling}
                    {this.props.item.understanding}
                    {this.props.item.support}
                    {this.props.item.comments}
            </>
        )
    }
}



export default ReviewItems;