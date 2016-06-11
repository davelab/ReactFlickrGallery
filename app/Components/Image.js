import React, { Component, PropTypes } from 'react';
import utils from '../utils'
import PreloadImageBg from './PreloadImageBg'

export default class Image extends Component {
    constructor(props) {
        super(props);
        //get the preload image: is a base 64 image for better performance
        this.preloadImage = utils.assets.loader;
    }

    // TODO: refactor di method to a more standard and reusable one
    goToUserPage(e, url) {
        e.stopPropagation();
        window.open(url,'_blank');
    }

    // render the photo owner avatar only if exist otherwise load a default one
    // the url of the avatar image is builded with an helper method inside
    // an external module called urlBuilder
    renderAvatar(user) {
        if (user.iconfarm == 0) {
            return (
                <div className="default-avatar" onClick={ (e) => this.goToUserPage(e, user.profileurl._content)}></div>
            )
        }else {
            return (
                <img className="avatar" onClick={ (e) => this.goToUserPage(e, user.profileurl._content)} src={ utils.urlBuilder.getFlickrAvatarUrl(user) } alt={ user.username._content }/>
            );
        }
    }

    // render the hexagonal image item once the asset is loaded.
    // this is the async loading image requirement for the test.
    // the url of the image is builded with an helper method inside
    // an external module called urlBuilder
    render() {
        const { image } = this.props;
        const { user } = image;
        
        return (
            <div className="gallery-item">
                    <div className="hexagon-shape hexagon-size">
                        <div className="hexagon-inner">
                            <PreloadImageBg
                                className="hexagon-image"
                                src={utils.urlBuilder.getFlickrPhotoUrl(image, this.props.size)}
                                placeholder={this.preloadImage}
                                onClick={this.props.onClick}>
                                {this.renderAvatar(user)}
                            </PreloadImageBg>
                        </div>
                    </div>
            </div>

        )
    }
}

// define the type of properties the this component require
Image.PropTypes = {
    image: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.string,
    rhombus: PropTypes.bool
}

Image.defaultProps = {
    size: 's'
};