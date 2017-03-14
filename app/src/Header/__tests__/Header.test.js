/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../index';

describe('PeopleList', () => {
  it('renders properly', () => {
    const wrapper = shallow(
      <Header />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
