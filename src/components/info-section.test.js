import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
	it('Renders without crashing', () => {
       shallow(<InfoSection />);
    });

    it('Renders Section', () => {
    	const wrapper = shallow(<InfoSection />);
    	expect (wrapper.find('#what').length).toEqual(1);
    });

    it('Renders Section', () => {
        const wrapper = shallow(<InfoSection />);
        expect (wrapper.find('h2').length).toEqual(1);
    });

    it('Renders list of instructions', () => {
    	const wrapper = shallow(<InfoSection />);
    	expect (wrapper.find('li').length).not.toEqual(0);
    });

    it('Renders list of instructions', () => {
    	const wrapper = shallow(<InfoSection />);
    	expect (wrapper.find('p').length).not.toEqual(0);
    });
}); //describe('<InfoSection/>')