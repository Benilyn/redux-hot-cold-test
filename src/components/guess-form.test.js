import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('<GuessForm />', () => {
	it('renders without crashing', () => {
		shallow(<GuessForm />);
	});

	it('should call onMakeGuess function when submit is clicked', () => {
    	const dispatch = jest.fn();
	    const wrapper = mount(<GuessForm dispatch={dispatch} />);
        const value = "88";
        wrapper.find('input[type="number"]').instance().value = value;
	    wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
    
    });

    it('should not call onMakeGuess function when form is empty', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<GuessForm dispatch={() => {}} />);
        expect(wrapper.find('input[type="number"]').instance().value).toEqual('');
        wrapper.simulate('submit');
        expect(dispatch).not.toHaveBeenCalled();
    });

    it('reset input when form is submitted', () => {
    	const wrapper = mount(<GuessForm dispatch={() => {}} />);
        wrapper.find('input[type="number"]').instance().value="88";
        wrapper.simulate('submit');
        expect(wrapper.find('input[type="number"]').instance().value).toEqual(''); 
    });


});