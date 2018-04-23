import React from 'react';
import {shallow} from 'enzyme';

import Game from './game';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

describe('<Game />', () => {
	it('Renders without crashing', () => {
       shallow(<Game />);
    });

    it('Renders Header', () => {
    	const wrapper = shallow(<Game />);
    	expect (wrapper.find('Header').length).toEqual(1);
    });

    it('Renders GuessSection', () => {
    	const wrapper = shallow(<Game />);
    	expect (wrapper.find('GuessSection').length).toEqual(1);
    });

    it('Renders StatusSection', () => {
    	const wrapper = shallow(<Game />);
    	expect (wrapper.find('StatusSection').length).toEqual(1);
    });

    it('Renders InfoSection', () => {
    	const wrapper = shallow(<Game />);
    	expect (wrapper.find('InfoSection').length).toEqual(1);
    });

    
}); //describe('<Game/>')