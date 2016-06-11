import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    //Render the prev button only if the current page is not the first
    renderPrevPageBtn() {
        if (this.props.currentPage == 1) return;
        return  (
                <button className="btn btn--blue" onClick={ this.props.onPrevPage } disabled={!this.props.isGalleryLoaded}>Prev</button>
            )
    }
    // Render the next button
    // (is not possible to retrive the maximum page to avoid
    // the render of next button once the user reach the last page)
    renderNextPageBtn() {
        return (
                <button className="btn btn--blue" onClick={ this.props.onNextPage } disabled={!this.props.isGalleryLoaded}>Next</button>
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

Pagination.PropTypes = {
    currentPage: PropTypes.number.isRequired,
    isGalleryLoaded: PropTypes.bool.isRequired,
    onNextPage: PropTypes.func.isRequired,
    onPrevPage: PropTypes.func.isRequired
}