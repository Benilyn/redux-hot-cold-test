import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('aural-status', () => {
	it('renders without crashing', () => {
		shallow (<AuralStatus />);
	});

	it('renders aural update', () => {
		let update = 'checking for update';
		let wrapper = shallow(<AuralStatus auralStatus={update} />);
		expect(wrapper.contains(update)).toEqual(true);
	});
});
