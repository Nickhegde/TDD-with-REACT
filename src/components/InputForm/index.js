import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { STRINGS } from 'consts';

import './InputForm.scss';

export default function InputForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [formData, setFormData] = useState('');

  const onSubmit = (data) => {
    if (formData) {
      axios.post('http://localhost:8000/upload', formData, {
      }).then(res => { // then print response status
        console.log(res.statusText)
      })
    }
  };

  const selectCSVFile = event => {
    const formDataVal = new FormData();
    formDataVal.append(
      'file',
      event.target.files[0],
      event.target.files[0].name
    );
    setFormData(formDataVal);
  };
  return (
    <form className='form-container' data-testid='form' onSubmit={handleSubmit(onSubmit)}>
      <input className='form-inputs first-name' name="firstName" placeholder="First Name" ref={register({ required: true, maxlength: 20 })} />
      <div className='error-msg first-name-error'>{errors.firstName && 'First name is required'}</div>
      <input className='form-inputs last-name' name="lastName" placeholder="Last Name" ref={register({ required: true, maxlength: 20 })} />
      <div className='error-msg last-name-error' data-testid='error'>{errors.lastName && 'Last name is required'}</div>
      <select className='form-inputs gender' name="gender" ref={register}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input className='form-inputs age' name="age" type="number" placeholder="Age" ref={register({ required: true, min: 10 })} />
      <input className='form-inputs mobile-number' type="tel" placeholder="Mobile number" name="mobileNumber" ref={register({ required: true, pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } })} />
      <div className='error-msg mobile-number-error'>{errors.mobileNumber && (errors.mobileNumber.message || 'Mobile number is required')}</div>
      <input className='form-upload-btn' type='file' accept=".pdf" name="upload-pdf-file" onChange={selectCSVFile} placeholder={STRINGS.CSV_UPLOAD} />
      <button className='form-submit-btn' type="submit" data-testid='submit'>{STRINGS.SUBMIT}</button>
    </form >
  );
}
