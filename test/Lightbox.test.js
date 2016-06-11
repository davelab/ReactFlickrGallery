import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Lightbox from '../app/Components/Lightbox';

const wrapper = shallow(<Lightbox />);

describe("<Lightbox />", function() {

    it("Has all props needed", function() {
        expect(wrapper.props().isOpen).to.be.defined;
        expect(wrapper.props().currentImage).to.be.defined;
        expect(wrapper.props().images).to.be.defined;
        expect(wrapper.props().onClose).to.be.defined;
        expect(wrapper.props().onClickNext).to.be.defined;
        expect(wrapper.props().onClickPrev).to.be.defined;
    });

    it("Contains the Portal component", function() {
        expect(wrapper.find('Portal')).to.have.length(1);
    });


});
