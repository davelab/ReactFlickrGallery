import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'
import '../sass/components/gallery.scss'

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

    getFlickrPhotoUrl(image) {
        const size = this.getImageSizeCode(this.props.size);
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_${size}.jpg`;
    }

    getFlickrAvatarUrl(user) {
        return `https://farm${user.iconfarm}.staticflickr.com/${user.iconserver}/buddyicons/${user.nsid}.jpg`;
    }

    renderAvatar(user) {
        if (user.iconfarm == 0) return null;
        return (
            <img src={ this.getFlickrAvatarUrl(user) } alt={ user.username._content }/>
        );
    }


    render() {
        const { image } = this.props;
        const { user } = image;

        const imageContainerStyle = classNames({
            'image-container' : true,
            'rhombus' : this.props.rhombus
        })

        return (
            <div>

                   {this.getFlickrPhotoUrl(image)}

            </div>
        )
    }
}

Image.PropTypes = {
    image: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.string,
    rhombus: PropTypes.bool
}


Image.defaultProps = {
    size: 's',
    rhombus: false
};