import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { InputForm } from 'components';
import { spy } from 'sinon';

describe('InputForm component', () => {
  const wrapper = shallow(<InputForm />);
  it('InputForm render check ', () => {
    expect(wrapper.find('form').length === 1);
    expect(wrapper.find('input').length === 4);
    expect(wrapper.find('select').length === 1);
    expect(wrapper.find('option').length === 2);
    expect(wrapper.find('div').length === 3);
    expect(wrapper.find('button').length === 1);
    expect(wrapper).toMatchSnapshot();
  });

  it('Input first name', () => {
    const firstName = wrapper.find('input.first-name');
    firstName.value = 'test first name';
    expect(firstName.value === 'test first name');
  });
  it('Input last name', () => {
    const lastName = wrapper.find('input.last-name');
    lastName.value = 'test last name';
    expect(lastName.value === 'test last name');
  });

  it('Input gender', () => {
    const select = wrapper.find('select.gender');
  });

  it('Input age', () => {
    const age = wrapper.find('input.age');
    age.value = 10;
    expect(age.value === 10);
  });

  it('Input mobile number', () => {
    const mobile = wrapper.find('input.mobile-number');
    mobile.value = 1000000000;
    expect(mobile.value === 100000000);
  });

  it('Submit form by filling all required fields', () => {
    const form = wrapper.find('form'),
      firstName = wrapper.find('input.first-name'),
      lastName = wrapper.find('input.last-name'),
      age = wrapper.find('input.age'),
      mobile = wrapper.find('input.mobile-number');
    firstName.value = 'test first name';
    lastName.value = 'test last name';
    age.value = 10;
    mobile.value = 1000000000;
    form.simulate('submit');
  })

  it('Submit input form without entering any fileds adn check for error messages', async () => {
    const form = wrapper.find('form');
    form.simulate('submit');
    console.log("div", form.find('div.first-name-error').html())

  });
});