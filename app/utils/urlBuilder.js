// this module allow to create the url from flickr data. Enough self explenatory.

const _getImageSizeCode = (size) => {
    switch (size) {
        case "small":
            return 's';
            break;
        case "medium":
            return 'q';
            break;
        case "large":
            return 'z';
            break;
        case "x-large":
            return 'c';
            break;
        default:
            return 's'
    }
}

const getFlickrPhotoUrl = (image, size = 'small') => {
        const imageSize = _getImageSizeCode(size);
        return `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_${imageSize}.jpg`;
}


const getFlickrAvatarUrl = (user) => {
    return `https://farm${user.iconfarm}.staticflickr.com/${user.iconserver}/buddyicons/${user.nsid}.jpg`;
}

const getPhotoPostUrl = (image) => {
    return `https://www.flickr.com/photos/${image.owner}/${image.id}`
}

module.exports = {
    getFlickrAvatarUrl,
    getFlickrPhotoUrl,
    getPhotoPostUrl
}