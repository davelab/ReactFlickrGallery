import React, {Component, PropTypes} from 'react';

export default class PreloadImageBg extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            error: false,
        };

        this.handleLoad = this.handleLoad.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    componentDidMount() {
        this.image = new Image();

        this.image.src = this.props.src;
        this.image.onload = this.handleLoad;
        this.image.onerror = this.handleError;
    }

    shouldComponentUpdate(nextState, nextProps) {
        return !this.state.loaded;
    }

    componentWillUnmount() {
        this.image = null;
    }

    handleLoad(e) {
        this.setState({
            loaded: true,
        });
    }

    handleError(e) {
        console.error('Failed to load ', this.props.src);

        this.setState({
            error: true,
        });
    }

    render() {
        const {src, placeholder, children, ...props} = this.props;
        const backgroundImg = !this.state.loaded || this.state.error ? { backgroundImage: `url(${placeholder})`, backgroundSize: '50%' } : { backgroundImage: `url(${src})` };

        return (
            <div style={backgroundImg} {...props}>
                {children}
            </div>
        );
    }
}

PreloadImageBg.propTypes = {
    src: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.object
}