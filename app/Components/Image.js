import React, { Component, PropTypes } from 'react';
import classNames from 'classnames'
import '../sass/components/gallery.scss'
import utils from '../utils/urlBuilder'

export default class Image extends Component {
    constructor(props) {
        super(props);
    }

    renderAvatar(user) {
        if (user.iconfarm == 0) return null;
        return (
            <img src={ utils.getFlickrAvatarUrl(user) } alt={ user.username._content }/>
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
                <div className={imageContainerStyle}>
                    <img
                        src={ utils.getFlickrPhotoUrl(image, 'medium') }
                        onClick={this.props.onClick}
                    />
                </div>
                <a href={ user.profileurl._content } target="_blank">
                    { this.renderAvatar(user) }
                    { user.username._content}
                </a>
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