import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ margin, id, label, name, autoComplete, type }) => {
    return (
        <TextField
            margin={margin}
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete={autoComplete}
            autoFocus
            type={type}
        />
    );
};

Input.propTypes = {
    autoComplete: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    margin: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
