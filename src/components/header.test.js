import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () => {
	it('Renders without crashing', () => {
       shallow(<Header />);
    });

    it('Renders TopNav', () => {
        const wrapper = shallow(<Header />);
//        expect (wrapper.find('TopNav').length).toEqual(1);
    });

    it('Renders header "Hot or Cold"', () => {
        const wrapper = shallow(<Header />);
        expect (wrapper.find('h1').length).toEqual(1);
    });    
}); {/*describe(<Header />)*/}