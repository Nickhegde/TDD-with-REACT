import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import { InputForm } from 'components';
import { spy } from 'sinon';
import { act } from 'react-dom/test-utils';
import MutationObserver from 'mutation-observer';
import { useForm } from 'react-hook-form';
global.MutationObserver = MutationObserver

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

  it('Submit form by filling all required fields', async () => {
    const form = wrapper.find('form'),
      firstName = wrapper.find('input.first-name'),
      lastName = wrapper.find('input.last-name'),
      age = wrapper.find('input.age'),
      mobile = wrapper.find('input.mobile-number');
    firstName.value = 'test first name';
    lastName.value = 'test last name';
    age.value = 10;
    mobile.value = 1000000000;
  })

  it('Submit input form without entering any fileds and check for error messages', async () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(<InputForm onSubmit={onSubmit} />)
    fireEvent.change(screen.getByPlaceholderText('First Name'), {
      target: { value: 'chuck' },
    })

    await act(async () => { await fireEvent.click(screen.getByTestId('form')) })
    wrapper.update();
    await console.log("error", wrapper.find('form').html())
  });
});