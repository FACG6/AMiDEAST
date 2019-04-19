import React from 'react';
import Input from '../Input';
import Label from '../Label';

const LabeledInput = props => {
  return (
    <Label input={Input} {...props} className={props.container} />
  )
};

export default LabeledInput;

// How to use the componente
// pass all proprty you need for the input and label
// for ex htmlFor, id, name, placeholder, function for onChange and the name of the classes
