import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    
    const callback = props.callback;
    
    return (
        <div>
            <button onClick={callback}>{props.text}</button>
        </div>
    );
};

export default Button;