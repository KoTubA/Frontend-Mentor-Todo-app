import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './FormField.styles';
import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { Circle } from 'components/atoms/Circle/Cricle';

const FormField = ({ onKeyUp, onChange, value, label, name, id, placeholder, type = 'text', ...props }) => {
  const [isActive, setActive] = useState(false);

  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Circle isActive={isActive} />
      <Input name={name} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onKeyUp={onKeyUp} {...props} onFocus={() => setActive(true)} onBlur={() => setActive(false)} />
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
