import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../UI/Button'
import Head from './../UI/Head'
import Input from './../UI/Input'
import Footer from './../UI/Footer'

const Authorization = props => {

    const [formMode, setFormMode] = useState('auth');
    const mode = props.mode;

    const setName = props.setName;
    const setIsLoggedIn = props.setIsLoggedIn;
    const name = props.name;

    function onChangeName(value) {
        setName(value);
    }

    return (
        <div className='mainCol'>
            <Head menu={null} />
            <div className="auth-wrap">
                <div className='auth'>
                    <div className="tabs">
                        <div className={formMode === 'auth' ? '_active' : ''} onClick={() => setFormMode('auth')}>АВТОРИЗАЦИЯ</div>
                        <div className={formMode === 'registration' ? '_active' : ''} onClick={() => setFormMode('registration')}>РЕГИСТРАЦИЯ</div>
                    </div>
                    <div className="borderBlock">
                        <div className="circle"></div>
                        <div className="border"></div>
                        <div className="circle"></div>
                    </div>
                    {formMode === 'auth' &&
                        <div>
                            <div className="inputBlock">
                                <div>Email</div>
                                <Input name="email" />
                            </div>
                            <div className="inputBlock">
                                <div>Пароль</div>
                                <Input name="password" />
                            </div>
                            <Button className="_center" text="ВОЙТИ" callback={() => { }} />
                        </div>
                    }
                    {formMode === 'registration' &&
                        <div>
                            <div className="inputBlock">
                                <div>ФИО</div>
                                <Input name="text" value={name} setValue={onChangeName} /></div>
                            <div className="inputBlock">
                                <div>Email</div>
                                <Input name="text" /></div>
                            <div className="inputBlock">
                                <div>Пароль</div>
                                <Input name="password" /></div>
                            <Button className="_center" text="РЕГИСТРАЦИЯ" callback={setIsLoggedIn} />
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Authorization;