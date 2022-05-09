import React from 'react';
import HeadLogo from './../../assets/HeadLogo.svg'

const Head = props => {

    const menu = props.menu;

    return (
        <div className='head-wrap'>
            <div className='head'>
                <img src={HeadLogo}></img>
                <div>
                    {menu &&
                        <div className="menu"></div>
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