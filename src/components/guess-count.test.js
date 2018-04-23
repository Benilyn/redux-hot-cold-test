import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('GuessCount', () => {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it ('renders the guess count', () => {
  	const count = 8;
  	const wrapper = shallow(<GuessCount guessCount={count} />);
  	expect(wrapper.find('#guessCount').text()).toEqual(`You've made ${count} guesses!`);
  });
});