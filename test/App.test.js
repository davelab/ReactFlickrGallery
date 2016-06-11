import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../app/Components/App';

const wrapper = shallow(<App />);

describe("<App />", function() {
  
    it("Contains an header", function() {
      expect(wrapper.find('header')).to.have.length(1);
    });

    it("Contains title `Weird Objects` in an h1", function() {
      expect(wrapper.find('header > h1').text()).to.equal('Weird Objects');
    });

    it("Contains the Gallery component", function() {
      expect(wrapper.find('Gallery')).to.have.length(1);
    });

});
