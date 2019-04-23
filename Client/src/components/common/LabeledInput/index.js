import React from 'react';
import Input from '../Input';
import Label from '../Label';
import './index.css';

const LabeledInput = props => {
  return (
    <div className='labeled-input'>
      <Label input={Input} {...props} />
    </div>
  )
};

export default LabeledInput;
