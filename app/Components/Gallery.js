import React from 'react'
import endpoint  from '../api/config'
import Superagent from 'superagent'
import Image from './Image.js'

export default class Gallery extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            perPage: 10,
            page: 1,
            lightboxIsOpen: false,
            currentImage: 0
        }

        this.openLightbox = this.openLightbox.bind(this)
    }

    componentDidMount() {
        Superagent
            .get(`${endpoint}&method=flickr.photos.search&text="Weird Objects"&per_page=${this.state.perPage}&page=${this.state.page}`)
            .end((err, res)  => {
                this.setState({
                    photos: res.body.photos.photo
                })
            })
    }

    openLightbox (event, index) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });

        console.log(this.state.lightboxIsOpen, this.state.currentImage);
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    render() {
        return(
            <div>
                {this.state.photos.map((photo, i) =>
                    <Image
                        key={i}
                        image={photo}
                        onClick={(e) => this.openLightbox(e, i)}
                    />
                )}
            </div>
        );
    }
}
