import React from 'react';
import PropTypes from 'prop-types';

const Textarea = props => {
    const newValue = React.createRef();
    const name = props.name;
    const value = props.value;
    const setValue = props.setValue;
    const placeholder = props.placeholder;
    const className = props.className || '';

    const handle = () => {
        const text = newValue.current.value;
        setValue && setValue(text);
    }

    return (
        <div className={`text-field ${className}`}>
            <textarea className={`text-field__input ${className}`} placeholder={placeholder} ref={newValue} type={name} name={name} id={name} value={value} onChange={handle} />
        </div>
    );
};

export default Textarea;