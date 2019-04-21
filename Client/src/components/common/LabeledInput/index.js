import React from 'react';
import Input from '../Input';
import Label from '../Label';

const LabeledInput = props => {
  return (
    <div className={props.LabeledInputClassName}>
      <Label input={Input} {...props} />
    </div>
  )
};

export default LabeledInput;
