import React from 'react';
import Input from '../Input';
import Label from '../Label';
import './index.css';

const LabeledInput = props => {
  return (
    <Label input={Input} {...props} />
  )
};

export default LabeledInput;

// How to use the componente
// pass all proprty you need for the input and label
// for ex htmlFor, id, name, placeholder
