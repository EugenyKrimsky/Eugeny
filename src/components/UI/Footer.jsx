import React from 'react';

const Footer = props => {

    const setPage = props.setPage;

    return (
        <div className='footer-wrap'>
            <div className="borderBlock">
                <div className="circle left"></div>
                <div className="border"></div>
                <div className="circle right"></div>
            </div>

            <div className='footer'>

                <div></div>
                <div onClick={() => setPage('we')}>МЫ</div>
            </div>
        </div>
    );
};

export default Footer;