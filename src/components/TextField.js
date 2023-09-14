import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';

const TextField = ({ label, value, onChange }) => {
  return (
    <MuiTextField
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      margin="normal"
      fullWidth
      required
    />
  );
};

export default TextField;