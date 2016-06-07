import React from 'react'
import endpoint  from '../api/config'
import Superagent from 'superagent'

export default class App extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        Superagent
            .get(endpoint + '&method=flickr.photos.search&text="cat"&per_page=10&page=1')
            .end((err, res)  => {
                this.setState({
                    photos: res.body.photos.photo
                })
            })
    }

    render() {
        return(
            <div>
                <h1>ReactStarter</h1>
            </div>
            );
    }
}
