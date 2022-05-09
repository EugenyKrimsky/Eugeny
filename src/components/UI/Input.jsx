import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {

    const newValue = React.createRef();

    const name = props.name;
    const value = props.value;
    const setValue = props.setValue;

    const handle = () => {
        const text = newValue.current.value;
        setValue && setValue(text);
    }

    return (
        <div className="text-field">
            <input className="text-field__input" ref={newValue} type={name} name={name} id={name} value={value} onChange={handle} />
        </div>
    );
};

export default Input;