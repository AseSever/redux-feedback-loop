import React, { Component } from 'react';

class ReviewItems extends Component {

    render() {
        let key = Object.keys(this.props.item)[0]
        console.log(this.props.item);
        return(
            <>
                    <p>{key}: {this.props.item[key]}</p>
                    
            </>
        )
    }
}



export default ReviewItems;