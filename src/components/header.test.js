import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';
import TopNav from './top-nav';

describe('<Header />', () => {
	it('Renders without crashing', () => {
       shallow(<Header />);
    });

    it('Renders TopNav', () => {
        const wrapper = shallow(<Header />);
        expect (wrapper.contains(<TopNav />)).toEqual(true);
    });

    it('Renders header "Hot or Cold"', () => {
        const wrapper = shallow(<Header />);
        expect (wrapper.find('h1').length).toEqual(1);
    });    
}); {/*describe(<Header />)*/}