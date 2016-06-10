import React, { Component, PropTypes } from 'react';
import '../sass/components/pagination.scss'

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    renderPrevPageBtn() {
        if (this.props.currentPage == 1) return;
        return  (
                <button className="btn btn--blue" onClick={ this.props.onPrevPage }>Prev</button>
            )
    }
    renderNextPageBtn() {
        return (
                <button className="btn btn--blue" onClick={ this.props.onNextPage }>Next </button>
            )
    }
    

    render() {
        return (
            <div className="pagination-container">
                { this.renderPrevPageBtn() }  { this.renderNextPageBtn() } <p>Page { this.props.currentPage }</p>
            </div>
        )
    }
}