import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Gallery from '../app/Components/Gallery';

const wrapper = shallow(<Gallery />);

describe("<Gallery />", function() {

    it("Gallery contains the Loader component", function() {
      expect(wrapper.find('Loader')).to.have.length(1);
    });

    it("Should have photos state and is an array", function() {
      expect(wrapper.state().photos).to.be.defined;
      expect(wrapper.state().photos).to.be.a('array');
    });
    
});
