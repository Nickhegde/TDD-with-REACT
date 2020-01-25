import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import { InputForm } from 'components';


describe('App component', () => {
  it('showForm equals to true when the App-link  button is clicked ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').length === 1);
    const Btn = wrapper.find('div.App-link');
    Btn.simulate('click');
    expect(wrapper.find('header').length === 0);
    expect(wrapper).toMatchSnapshot();
  });
});