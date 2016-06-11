import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Pagination from '../app/Components/Pagination';

const wrapper = shallow(<Pagination currentPage="2" />);

describe("<Pagination />", function() {

    it("Has all properties needed", function() {
        expect(wrapper.props().isGalleryLoaded).to.be.defined;
        expect(wrapper.props().currentPage).to.be.defined;
        expect(wrapper.props().onNextPage).to.be.defined;
        expect(wrapper.props().onPrevPage).to.be.defined;
    });

    it("print the correct page number from prop", function() {
        expect(wrapper.find('p').text()).to.equal('Page 2');
    });

});
