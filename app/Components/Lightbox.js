import React, { Component, PropTypes } from 'react'
import Portal from './Portal'
import utils from '../utils/urlBuilder'
import '../sass/components/lightbox.scss'

export default class Lightbox extends Component {
    constructor(props) {
        super(props);
        this.state = { windowHeight: 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen) {
            window.addEventListener('resize', this.resizeEvents.bind(this));
            this.resizeEvents();
        } else {
            window.removeEventListener('resize', this.resizeEvents.bind(this));
        }

    }

    resizeEvents() {
        this.setState({
            windowHeight: window.innerHeight || 0
        })
    }

    renderPrevButton() {
        if (this.props.currentImage === 0) return;
        return (
            <button onClick={this.props.onPrev} className="lightbox--arrow prev">
                <i className="fa fa-angle-left"></i>
            </button>
        )
    }

    renderNextButton() {
        if (this.props.currentImage === this.props.images.length - 1) return;
        return (
            <button onClick={this.props.onNext} className="lightbox--arrow next">
                <i className="fa fa-angle-right"></i>
            </button>
        )
    }

    renderImage() {
        const { images, currentImage } = this.props;

        if (!images || !images.length) return null;
        const image = images[currentImage];

        return(
            <div className="lightbox--container">
                <header className="lightbox--header">
                    <button onClick={this.props.onClose}> <i className="fa fa-close"></i> </button>
                </header>
                <img
                    src={utils.getFlickrPhotoUrl(image, 'large')}
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
    
    render() {
        return (
            <Portal>
                {this.renderModal()}
            </Portal>
        )
    }
}

Lightbox.protoTypes = {
    currentImage: PropTypes.number,
    images: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onClickNext: PropTypes.func,
    onClickPrev: PropTypes.func,
    onClose: PropTypes.func.isRequired
}