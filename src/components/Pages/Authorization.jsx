import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './../UI/Button'

const Authorization = props => {

    const [formMode, setFormMode] = useState('auth');
    const mode = props.mode;

    const setName = props.setName;
    const setIsLoggedIn = props.setIsLoggedIn;
    const name = props.name;

    function onChangeName(event) {
        setName(name + event.nativeEvent.data);
    }

    return (
        <div>
            <div className="tabs">
                <Button text="АВТОРИЗАЦИЯ" callback={() => setFormMode('auth')} />
                <Button text="РЕГИСТРАЦИЯ" callback={() => setFormMode('registration')} />
            </div>
            {formMode === 'auth' &&
                <div>
                    <div>Email</div>
                    <input type="text" name="email" />
                    <div>Пароль</div>
                    <input type="password" name="password" />
                    <Button text="ВОЙТИ" callback={() => { }} />
                </div>
            }
            {formMode === 'registration' &&
                <div>
                    <div>ФИО</div>
                    <input type="text" name="name" value={name} onChange={onChangeName}/>
                    <div>Email</div>
                    <input type="text" name="email" />
                    <div>Пароль</div>
                    <input type="password" name="password" />
                    <Button text="РУГИСТРАЦИЯ" callback={setIsLoggedIn} />
                </div>
            }
        </div>
    );
};

export default Authorization;