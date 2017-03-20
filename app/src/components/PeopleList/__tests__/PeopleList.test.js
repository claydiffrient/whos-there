/* eslint-env jest */
import { shallow } from 'enzyme';
import React from 'react';
import PeopleList from '../index';

describe('PeopleList', () => {
  it('renders out the names of people', () => {
    const people = [{
      name: 'Clay'
    }, {
      name: 'Elias'
    }, {
      name: 'Sterling'
    }, {
      name: 'Andy'
    }];
    const wrapper = shallow(
      <PeopleList people={people} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
