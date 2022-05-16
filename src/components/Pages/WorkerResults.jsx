import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textarea from './../UI/Textarea'
import Head from './../UI/Head';
import Footer from './../UI/Footer';
import Input from './../UI/Input';

const WorkerResults = props => {
    const name = props.name;
    const vacancies = props.vacancies;
    const activeVacancy = vacancies.find(el => el.active);
    const setIsLoggedIn = props.setIsLoggedIn;
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;

    const setActiveVacancy = el => {
        const newVacancies = vacancies.map(el => el);
        newVacancies.forEach(v => {
            if (v.name === el.name) {
                v.active = true;
            } else {
                v.active = false;
            }
        });
        setVacancies(newVacancies);
    }
    console.log(activeVacancy);
    return (
        <div className='workSection mainCol'>
            <Head setIsLoggedIn={setIsLoggedIn} name={name} setPage={setPage} />
            <div className='EmployersTesting'>
                <div className="vacancies">
                    {vacancies.map(el =>
                        <div className={`item ${el.active ? '_active' : ''}`} onClick={() => setActiveVacancy(el)}>
                            {el.name}
                        </div>
                    )}
                </div>
                <div className="vertBorder"></div>
                <div className="candidates">
                    {activeVacancy &&
                        <div>
                            <Textarea className="desc" value={activeVacancy.desc} />
                            <div className="questionBlock">
                                <Input className="_noBorder" name='ВАШИ ШАНСЫ' placeholder='ВАШИ ШАНСЫ' value='ВАШИ ШАНСЫ' />
                                <div className="borderBlockGrey">
                                    <div className="circleGrey left"></div>
                                    <div className="borderGrey"></div>
                                    <div className="circleGrey right"></div>
                                </div>
                                <Input className="_noBorder" value={`${activeVacancy.candidates[0].answered}/${activeVacancy.questions.length}`} />
                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer setPage={setPage} />
        </div>);
};


export default WorkerResults;