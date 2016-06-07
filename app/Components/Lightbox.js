import React, { Component, PropTypes } from 'react'
import Portal from './Portal'
import '../sass/components/lightbox.scss'

export default class Lightbox extends Component {
    constructor(props) {
        super(props);
    }

    renderImage() {

    }

    renderModal() {
        if (!this.props.isOpen) return null;

        return (
            <div>
                {this.renderModal()}
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