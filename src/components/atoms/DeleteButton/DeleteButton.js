import React from 'react';
import { DeleteStyledButton } from './DeleteButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/icons/icon-cross.svg';

const DeleteButton = (props) => (
  <DeleteStyledButton {...props}>
    <DeleteIcon />
  </DeleteStyledButton>
);

export default DeleteButton;
