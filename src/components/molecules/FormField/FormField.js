import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { Circle } from 'components/atoms/Circle/Cricle';

const FormField = ({ onKeyUp, onChange, value, label, name, id, placeholder, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Circle />
      <Input name={name} id={id} type={type} placeholder={placeholder} value={value} spellCheck="false" onChange={onChange} onKeyUp={onKeyUp} {...props} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
