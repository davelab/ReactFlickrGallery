import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    renderPrevPageBtn() {
        if (this.props.currentPage == 1) return;
        return  (
                <button className="btn btn--blue" onClick={ this.props.onPrevPage } disabled={!this.props.isGalleryLoaded}>Prev</button>
            )
    }
    renderNextPageBtn() {
        return (
                <button className="btn btn--blue" onClick={ this.props.onNextPage } disabled={!this.props.isGalleryLoaded}>Next </button>
            )
    }
    

    render() {
        return (
            <div className="fixed-bar fixed-bar--bottom">
                { this.renderPrevPageBtn() }  { this.renderNextPageBtn() } <p>Page { this.props.currentPage }</p>
            </div>
        )
    }
}