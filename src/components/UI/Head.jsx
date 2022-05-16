import { useState } from 'react';
import React from 'react';
import HeadLogo from './../../assets/HeadLogo.svg'

const Head = props => {

    const name = props.name;
    const setPage = props.setPage;
    const setIsLoggedIn = props.setIsLoggedIn;

    let [open, setOpen] = useState(false);
    let className = "name";

    if (open) {
        className += ' open';
    }

    return (
        <div className='head-wrap'>
            <div className='head'>
                <img src={HeadLogo}></img>
                <div className='menuBlock'>
                    {name &&
                        <div className={className} onClick={() => setOpen(!open)}>{name}</div>
                    }
                    {open && 
                        <div className="menu">
                            <div className="menu-item" onClick={() => setPage('testing')}>Тестирование</div>
                            <div className="menu-item" onClick={() => setPage('results')}>Результаты</div>
                            <div className="menu-item _mt20" onClick={() => setIsLoggedIn(false)}>Выйти</div>
                        </div>
                    }
                </div>
            </div>

            <div className="borderBlock">
                <div className="circle left"></div>
                <div className="border"></div>
                <div className="circle right"></div>
            </div>
        </div>
    );
};

export default Head;