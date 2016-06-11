import React, { Component, PropTypes } from 'react'
import Portal from './Portal'
import utils from '../utils'
import '../sass/components/lightbox.scss'

export default class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.state = { windowHeight: 0 };
    }

    // DOM manipulation before the component recive properties and will be mounted
    // if the lightbox is open the body scroll is blocked
    // if the lightbox is open the window object listen to resize event and
    // call a method that set the height of the image
    // allowing the responsivness of the lightbox, as required
    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            utils.bodyScroll.blockScroll();
            window.addEventListener('resize', this.resizeEvents.bind(this));
            this.resizeEvents();
        } else {
            utils.bodyScroll.allowScroll();
            window.removeEventListener('resize', this.resizeEvents.bind(this));
        }
    }

    // set the window height to a state every time the window is resized
    resizeEvents() {
        this.setState({
            windowHeight: window.innerHeight || 0
        })
    }

    // render the button that allow to show the previous image from the current page
    // only if the current one is not the first
    renderPrevButton() {
        if (this.props.currentImage === 0) return;
        return (
            <button onClick={this.props.onPrev} className="lightbox--arrow prev">
                <i className="fa fa-angle-left"></i>
            </button>
        )
    }

    // render the button that allow to show the nexxt image from the current page
    // only if the current one is not the last
    renderNextButton() {
        if (this.props.currentImage === this.props.images.length - 1) return;
        return (
            <button onClick={this.props.onNext} className="lightbox--arrow next">
                <i className="fa fa-angle-right"></i>
            </button>
        )
    }

    // render the clicked image inside the gallery
    // with the link to the original post in flickr
    // the close button
    // and the information about the current image out of the images set
    renderImage() {
        const { images, currentImage } = this.props;

        if (!images || !images.length) return null;
        const image = images[currentImage];

        return(
            <div className="lightbox--container">
                <header className="lightbox--header">
                    <a href={utils.urlBuilder.getPhotoPostUrl(image)} target="_blank"> <i className="fa fa-link"></i> Flickr Post</a>
                    <button onClick={this.props.onClose}> <i className="fa fa-close"></i> </button>
                </header>
                <img
                    src={utils.urlBuilder.getFlickrPhotoUrl(image, 'x-large')}
                    style={ { maxHeight: this.state.windowHeight} } />
                <footer className="lightbox--footer">
                    <div className="counter">
                        { currentImage + 1 } of { images.length }
                    </div>
                    <div className="description">{image.title}</div>
                </footer>
            </div>
        )
    }

    //render the entire modal only if is clicked
    renderModal() {
        if (!this.props.isOpen) return null;

        return (
            <div className="lightbox">
                <span className="fake-height"></span>
                {this.renderImage()}
                {this.renderPrevButton()}
                {this.renderNextButton()}
            </div>
        )
    }

    // the Portal component append a div inside the dom  only if the rendermodal is called
    // so only if it has a child
    render() {
        return (
            <Portal>
                {this.renderModal()}
            </Portal>
        )
    }
}

Lightbox.protoTypes = {
    currentImage: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onClickNext: PropTypes.func,
    onClickPrev: PropTypes.func
}