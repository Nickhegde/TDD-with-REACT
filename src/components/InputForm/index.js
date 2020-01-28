import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { STRINGS } from 'consts';

import './InputForm.scss';

export default function InputForm() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  const [formData, setFormData] = useState('');

  const selectCSVFile = event => {
    const formDataVal = new FormData();
    formDataVal.append(
      'file',
      event.target.files[0],
      event.target.files[0].name
    );
    console.log("{ formDataVal }", formDataVal.getAll('file'))
    setFormData({ formDataVal });
  };
  console.log("formData", formData);
  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <input className='form-inputs' name="firstName" placeholder="First Name" ref={register({ required: true, maxlength: 20 })} />
      <div className='error-msg'>{errors.firstName && 'First name is required'}</div>
      <input className='form-inputs' name="lastName" placeholder="Last Name" ref={register({ required: true, maxlength: 20 })} />
      <div className='error-msg'>{errors.lastName && 'Last name is required'}</div>
      <select className='form-inputs' name="gender" ref={register}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input className='form-inputs' name="age" type="number" placeholder="Age" ref={register({ required: true, min: 10 })} />
      <input className='form-inputs' type="tel" placeholder="Mobile number" name="mobileNumber" ref={register({ required: true, pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } })} />
      <div className='error-msg'>{errors.mobileNumber && (errors.mobileNumber.message || 'Mobile number is required')}</div>
      <input className='form-upload-btn' type='file' accept=".csv" name="upload-csv-file" onChange={selectCSVFile} placeholder={STRINGS.CSV_UPLOAD} />
      <button className='form-submit-btn' type="submit">{STRINGS.SUBMIT}</button>
    </form>
  );
}
