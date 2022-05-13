import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {

    const newValue = React.createRef();

    const name = props.name;
    const value = props.value;
    const setValue = props.setValue;
    const placeholder = props.placeholder;
    const className=props.className;
    console.log(className);
    const i = props?.i
    const parI = props?.parI;

    const handle = () => {
        const text = newValue.current.value;
        if (i !== undefined) {
            if (parI !== undefined) {
                setValue && setValue(parI, i, text);
            } else {
                setValue && setValue(i, text);
            }
        } else {
            setValue && setValue(text);
        }
    }

    return (
        <div className={`text-field ${className}`}>
            <input className="text-field__input" placeholder={placeholder} ref={newValue} type={name} name={name} id={name} value={value} onChange={handle} />
        </div>
    );
};

export default Input;