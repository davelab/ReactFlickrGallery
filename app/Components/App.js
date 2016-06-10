import React from 'react'
import Gallery from './Gallery'
import '../sass/global.scss'

export default class App extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="fixed-bar fixed-bar--top">
                    <h1>Weird Objects</h1>
                </div>
                <Gallery />
            </div>
            );
    }
}
