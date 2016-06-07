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
                <Gallery />
            </div>
            );
    }
}
