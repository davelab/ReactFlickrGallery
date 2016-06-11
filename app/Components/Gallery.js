import React, { Component, PropTypes } from 'react'
import endpoint  from '../api/config'
// http client to make async calls
import Superagent from 'superagent'

import Image from './Image'
import Lightbox from './Lightbox'
import Loader from 'react-loader'
import Pagination from './Pagination'

import '../sass/components/gallery.scss'

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            photos: [],
            perPage: 11,
            page: 1,
            lightboxIsOpen: false,
            currentImage: 0
        }
        this.objPhotos = []
    }

    componentDidMount() {
        this.createImagesSet()
    }

    // this method prepare the data set for the gallery,
    // matching photos set and the Owner information merging
    // the two Flickr API call in one object with the help of Promises
    createImagesSet(getPerPage = this.state.perPage, getPage = this.state.page ) {
        this.setState({
            loaded: false
        })

        this.getFlickrImages(getPerPage, getPage)
            .then((photoData) => {
                this.objPhotos = photoData;
                return Promise.all(photoData.map(this.getUserInfo))
            })
            .then((userData) => {
                const uPhotos = this.objPhotos.map((obj, i) => {
                    let user = { user: userData[i] }
                    return Object.assign({}, obj, user)
                });

                this.setState({
                    photos: uPhotos,
                    loaded: true
                })
            })
    }

    // Async call that fetch photos
    // return a promise
    getFlickrImages(getPerPage, getPage) {
        return new Promise((resolve, reject) => {
            Superagent
                .get(`${endpoint}&method=flickr.photos.search&text="Weird Objects"&per_page=${getPerPage}&page=${getPage}`)
                .end((err, res)  => {
                    err ? reject(err) : resolve(res.body.photos.photo);
                })
        })
    }

    // Async call that fetch photo Owner (user)
    // return a promise
    getUserInfo(data) {
        return new Promise((resolve, reject) => {
            Superagent
                .get(`${endpoint}&method=flickr.people.getInfo&user_id=${data.owner}`)
                .end((err, res)  => {
                    err ? reject(err) : resolve(res.body.person);
                })
        })
    }

    // In order to open a lightbox we need the index of
    // the clicked image and that the state open for the lightbox component
    openLightbox (e, index) {
        e.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }

    // Lightbox inherits this method to close it self
    // resetting the state of currentImage an LightboxIsOpen
    // if we want to tell to lightbox component that should be close
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        });
    }

    // Lightbox inherits this method for Change to next image
    // it increments the currentImage state
    nextImage() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }
    // Lightbox inherits this method for Change to prev image
    // it decrements the currentImage state
    prevImage() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }

    // Pagination component inherits this method to change the current and
    // fetching new photos set by calling same method when the component is mounted for the first time
    nextPage() {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.createImagesSet();
        })
    }
    //same as prev method but decrementing the page state
    prevPage() {
        this.setState({
            page: this.state.page - 1
        }, () => {
            this.createImagesSet();
        })
    }


    // iterate over all the photos fetched and pass necessary
    // information to Image Item component
    renderImages() {
        return (
            this.state.photos.map((photo, i) =>
                <Image
                    key={i}
                    image={photo}
                    size="medium"
                    onClick={(e) => this.openLightbox(e, i)} />
            )
        )
    }

    // Render the pagination only if all the photos set are fetched from Flickr
    renderPagination() {
        if (this.state.photos.length === 0) return;
        return (
            <footer>
                <Pagination
                    onPrevPage={ () => this.prevPage() }
                    onNextPage={ () => this.nextPage() }
                    currentPage={ this.state.page } 
                    isGalleryLoaded={ this.state.loaded }
                />
            </footer>
        );
    }

    // render the gallery only once all the data are fetched
    render() {
        return(
            <div className="container">
                <Loader
                    loaded={this.state.loaded}
                    lines={10} length={0} width={6} radius={40} color="#0a91cc">
                    <div className="inner-container">
                        { this.renderImages() }
                    </div>
                    <Lightbox
                        currentImage= {this.state.currentImage}
                        images= {this.state.photos}
                        isOpen= {this.state.lightboxIsOpen}
                        onClose= { () => this.closeLightbox() }
                        onNext= { () => this.nextImage() }
                        onPrev= { () => this.prevImage() } />
                </Loader>
                { this.renderPagination() }
            </div>
        );
    }
}

