import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'
import '../sass/components/gallery.scss'
import utils from '../utils/urlBuilder'

export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    renderAvatar(user) {
        if (user.iconfarm == 0) {
            return (
                <div className="default-avatar"></div>
            )
        }else {
            return (
                <img className="avatar" src={ utils.getFlickrAvatarUrl(user) } alt={ user.username._content }/>
            );
        }
    }

    render() {
        const { image } = this.props;
        const { user } = image;

        const imageContainerStyle = classNames({
            'image-container' : true,
            'rhombus' : this.props.rhombus
        })

        return (
            <div className="gallery-item">
                <div className={imageContainerStyle}>
                    <img
                        className="gallery-image"
                        src={ utils.getFlickrPhotoUrl(image, this.props.size) }
                        onClick={this.props.onClick}
                    />
                </div>
                { this.renderAvatar(user) }
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