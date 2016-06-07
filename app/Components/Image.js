import React, { Component, PropTypes } from 'react';



export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    getFlickrPhotoUrl(image) {
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_s.jpg`;
    }
    
    render() {
        return (
            <div>
                <img
                    src={this.getFlickrPhotoUrl(this.props.image)}
                    onClick={this.props.onClick} />
            </div>
        )
    }
}

Image.PropTypes = {
    image: PropTypes.object.isRequired,
    onClick: PropTypes.func
}