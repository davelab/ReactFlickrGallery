import React from 'react'
import Gallery from './Gallery'
import '../sass/global.scss'

// Simple wrapper app component
export default class App extends  React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <header className="fixed-bar fixed-bar--top">
                    <h1>Weird Objects</h1>
                </header>
                <Gallery />
            </div>
            );
    }
}
