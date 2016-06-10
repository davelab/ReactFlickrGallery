import React, { Component, PropTypes } from 'react';
import utils from '../utils'
import PreloadImageBg from './PreloadImageBg'

export default class Image extends Component {
    constructor(props) {
        super(props);
        
        this.preloadImage = utils.assets.loader;
    }

    goToUserPage(e, url) {
        e.stopPropagation();
        window.open(url,'_blank');
    }

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