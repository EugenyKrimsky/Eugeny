import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {

    const callback = props.callback;

    return (
        <div className='Button' onClick={callback}>{props.text}</div>
    );
};

export default Button;