import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';
import Feedback from './feedback';
import GuessForm from './guess-form';

describe('<GuessSection />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessSection />);
    });

    it('Renders Feedback', () => {
        const wrapper = shallow(<GuessSection />);
        expect (wrapper.contains(<Feedback />)).toEqual(true);
    });

    it('Renders GuessForm', () => {
        const wrapper = shallow(<GuessSection />);
        expect (wrapper.contains(<GuessForm />)).toEqual(true);
    });

}); //describe('<GuessSection/>')