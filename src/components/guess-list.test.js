import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
	it('Renders without crashing', () => {
       shallow(<GuessList guesses={[]} />);
    });

	it('Renders GuessList', () => {
    	const guesses = [3, 8];
    	const wrapper = mount(<GuessList guesses={guesses}/>);
    	expect(wrapper.find('li').length).toEqual(guesses.length);
    });
    
});