import React from 'react';
import { useForm } from 'react-hook-form';
import { STRINGS } from 'consts';

import './InputForm.scss';

export default function InputForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <input className='form-inputs' name="firstName" placeholder="First Name" ref={register({ required: true, maxlength: 20 })} />
      <span>{errors.firstName && 'First name is required'}</span>
      <input className='form-inputs' name="lastName" placeholder="Last Name" ref={register({ required: true, maxlength: 20 })} />
      <span>{errors.lastName && 'Last name is required'}</span>
      <select className='form-inputs' name="gender" ref={register}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input className='form-inputs' name="age" type="number" placeholder="Age" ref={register({ required: true, min: 10 })} />
      <input className='form-inputs' type="tel" placeholder="Mobile number" name="Mobile number" ref={register({ required: true, minLength: 0, maxLength: 10 })} />
      <button className='form-submit-btn' type="submit">{STRINGS.SUBMIT}</button>
    </form>
  );
}
