import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { InputForm } from 'components';

describe('InputForm component', () => {
  const wrapper = shallow(<InputForm />);
  it('InputForm render check ', () => {
    expect(wrapper.find('form').length === 1);
    expect(wrapper.find('input').length === 4);
    expect(wrapper.find('select').length === 1);
    expect(wrapper.find('option').length === 2);
    expect(wrapper.find('div').length === 3);
    expect(wrapper.find('button').length === 1);
    // const Btn = wrapper.find('div.App-link');
    // Btn.simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('InputForm inputs validation check for first name', () => {
    const firstName = wrapper.find('form').childAt(0);

  });
});