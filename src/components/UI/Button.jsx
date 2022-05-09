import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {

    const callback = props.callback;
    const className = props.className;

    return (
        <div className={'Button ' + className} onClick={callback}>{props.text}</div>
    );
};

export default Button;