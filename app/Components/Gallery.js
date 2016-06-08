import React from 'react'
import endpoint  from '../api/config'
import Superagent from 'superagent'
import Image from './Image'
import Lightbox from './Lightbox'

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
        this.objPhotos = []
    }

    componentDidMount() {
        this.getFlickrImages()
            .then((photoData) => {
                this.objPhotos.push(...photoData);
                return Promise.all(photoData.map(this.getUserInfo))
            })
            .then((userData) => {
                const uPhotos = this.objPhotos.map((obj, i) => {
                    let user = { user: userData[i] }
                    return Object.assign({}, obj, user)
                });

                this.setState({
                    photos: uPhotos
                })
            })
    }

    getFlickrImages() {
        return new Promise((resolve, reject) => {
            Superagent
                .get(`${endpoint}&method=flickr.photos.search&text="Weird Objects"&per_page=${this.state.perPage}&page=${this.state.page}`)
                .end((err, res)  => {
                    err ? reject(err) : resolve(res.body.photos.photo);
                })
        })
    }

    getUserInfo(data) {
        return new Promise((resolve, reject) => {
            Superagent
                .get(`${endpoint}&method=flickr.people.getInfo&user_id=${data.owner}`)
                .end((err, res)  => {
                    err ? reject(err) : resolve(res.body.person);
                })
        })
    }

    openLightbox (event, index) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    nextImage() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }

    prevImage() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }

    render() {
        return(
            <div>
                {this.state.photos.map((photo, i) =>
                    <Image
                        key={i}
                        image={photo}
                        size="medium"
                        user={this.getUserInfo(photo.owner)}
                        onClick={(e) => this.openLightbox(e, i)}
                    />
                )}

                <Lightbox
                    currentImage= {this.state.currentImage}
                    images= {this.state.photos}
                    isOpen= {this.state.lightboxIsOpen}
                    onClose= { () => this.closeLightbox() }
                    onNext= { () => this.nextImage() }
                    onPrev= { () => this.prevImage() }
                />
            </div>
        );
    }
}
