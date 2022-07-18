import React, { InputHTMLAttributes } from 'react';
import { Field } from './styled';

export default function Input(props?: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Field>
      <label htmlFor={props?.name}>{props?.placeholder}</label>
      <input {...props} placeholder="" />
    </Field>
  );
}
