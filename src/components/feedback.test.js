import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './aural-status';


describe('Feedback', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });


//	it('renders feedback', () => {
//		let feedback = 'checking for feedback';
//		let wrapper = shallow(<Feedback feedback={feedback} />);
//		expect(wrapper.contains(feedback)).toEqual(true);
//	});
});
