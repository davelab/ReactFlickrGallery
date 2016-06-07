import React, { Component, PropTypes } from 'react';

export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    getImageSizeCode(size = 'small') {
        switch (size) {
            case "small":
                return 's';
                break;
            case "medium":
                return 'q';
                break;
            case "large":
                return 'c';
                break;
            default:
                return 's'
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.user);
    }

    getFlickrPhotoUrl(image) {
        const size = this.getImageSizeCode(this.props.size);
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_${size}.jpg`;
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
    onClick: PropTypes.func,
    size: PropTypes.string
}