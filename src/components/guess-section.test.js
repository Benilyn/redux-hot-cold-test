import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessSection />);
    });

    it('Renders Feedback', () => {
        const wrapper = shallow(<GuessSection />);
//        expect (wrapper.find('Feedback').length).toEqual(1);
    });

    it('Renders GuessForm', () => {
        const wrapper = shallow(<GuessSection />);
//        expect (wrapper.find('GuessForm').length).toEqual(1);
    });

}); //describe('<GuessSection/>')