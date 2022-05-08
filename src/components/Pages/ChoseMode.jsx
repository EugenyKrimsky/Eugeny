import React from 'react';
import PropTypes from 'prop-types';
import Button from './../UI/Button'

const ChoseMode = props => {

    const chooseMode = props.chooseMode;

    return (
        <div>
            <Button text="Работадатель" callback={() => chooseMode('employer')} />
            <Button text="Соискатель" callback={() => chooseMode('applicant')} />
        </div>
    );
};

export default ChoseMode;