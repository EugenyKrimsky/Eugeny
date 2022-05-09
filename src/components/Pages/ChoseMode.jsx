import React from 'react';
import logo from './../../assets/Logo.svg'
import Button from './../UI/Button'

const ChoseMode = props => {

    const chooseMode = props.chooseMode;

    return (
        <div className='mainCol chooseMods'>
            <img src={logo}/>
            <div className='flex-row'>
                <Button text="Работадатель" callback={() => chooseMode('employer')} />
                <Button text="Соискатель" callback={() => chooseMode('applicant')} />
            </div>
        </div>
    );
};

export default ChoseMode;