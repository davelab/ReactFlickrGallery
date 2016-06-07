import React, { Component, PropTypes } from 'react';



export default class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image
        };
    }

    getFlickrPhotoUrl(image) {
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_s.jpg`;
    }
    
    render() {
        return (
            <div>
                <img
                    src={this.getFlickrPhotoUrl(this.state.image)}
                    onClick={this.props.onClick} />
            </div>
        )
    }
}

Image.PropTypes = {
    image: PropTypes.object.isRequired
}