import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {generateAuralUpdate, restartGame} from '../actions';

describe('<TopNav />', () => {
	it('Renders without crashing', () => {
       shallow(<TopNav />);
    }); {/*Renders without crashing*/}

    it('Should be able to click "WHAT?" button', () => {
        const wrapper = shallow(<TopNav />);
        wrapper.find('.what').simulate('click');
        expect (wrapper.find('.new').length).toEqual(1);
    }); {/* Should be able to click "WHAT?" button */}

    it.only('Should dispatch restartGame', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        wrapper.find('.new').simulate('click');
        expect(dispatch).toHaveBeenCalled();
    }); {/* Should be able to click "NEW GAME" button */}

    it('Should dispatch generateAuralUpdate', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<TopNav dispatch={dispatch}/>);
        wrapper.find('.visuallyhidden').simulate('click');
        expect(dispatch).toHaveBeenCalled();
    }); {/* Should dispatch generateAuralUpdate */}

}); //describe('<Game/>')