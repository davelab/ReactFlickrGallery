import React, { Children, Component, PropTypes } from 'react';
import Transition from 'react-addons-transition-group';
import { render } from 'react-dom';

// This component allow to render the Lightbox
// this create and append a div int the DOM only it has child

const FirstChild = ({ children }) => {
    let kids = Children.toArray(children);
    return kids[0] || null;
};

export default class Portal extends Component {
    constructor () {
        super();
        this.portalElement = null;
    }
    //once the compent is mounted create and append a dic the thd DOM inside the body tag
    // the call a react method to update it self to show the child component
    // in this case the Lightbox Component
    componentDidMount () {
        const p = document.createElement('div');
        document.body.appendChild(p);
        this.portalElement = p;
        this.componentDidUpdate();
    }
    componentDidUpdate () {
        render(
            <Transition {...this.props} component={FirstChild} />,
            this.portalElement
        );
    }
    componentWillUnmount () {
        document.body.removeChild(this.portalElement);
    }
    render () {
        return null;
    }
}

Portal.propTypes = {
    children: PropTypes.element,
};