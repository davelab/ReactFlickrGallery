import React, { Component, PropTypes } from 'react';

export default class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    renderPrevPageBtn() {
        if (this.props.currentPage == 1) return;
        return (
                <button onClick={ this.props.onPrevPage }>prev</button>
            )
    }
    renderNextPageBtn() {
        return (
                <button onClick={ this.props.onNextPage }>next</button>
            )
    }

    renderCurrentPage() {
        return(
            <div>
                Page { this.props.currentPage }
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderPrevPageBtn() } ... { this.renderNextPageBtn() } { this.renderCurrentPage() }
            </div>
        )
    }
}