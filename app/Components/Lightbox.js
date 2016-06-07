import React, { Component, PropTypes } from 'react'
import Portal from './Portal'
import Image from './Image'
import '../sass/components/lightbox.scss'

export default class Lightbox extends Component {
    constructor(props) {
        super(props);
    }

    renderPrevButton() {
        if (this.props.currentImage === 0) return;
        return (
            <span onClick={this.props.onPrev}> prev </span>
        )
    }

    renderNextButton() {
        if (this.props.currentImage === this.props.images.length - 1) return;
        return (
            <span onClick={this.props.onNext}> next </span>
        )
    }

    renderImage() {
        const { images, currentImage } = this.props;

        if (!images || !images.length) return null;
        const image = images[currentImage];
        return(
            <div className="image-container">

                <Image image={image}
                       size="large"
                       onClick={null} />
            </div>
        )
    }

    renderModal() {
        if (!this.props.isOpen) return null;

        return (
            <div className="lightbox">
                <div className="lightbox-control" >
                    <span onClick={this.props.onClose}> x </span>
                    { this.renderPrevButton() }
                    { this.renderNextButton() }
                </div>
                {this.renderImage()}
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