import React, { useState } from 'react';
import Head from './../UI/Head'
import Footer from './../UI/Footer'

const EmployersTesting = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const activeVacancy = vacancies.find(el => el.active);
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;

    let candidates = [];
    if (activeVacancy) {
        candidates = activeVacancy.candidates;
    }

    const setActiveVacancy = el => {
        const newVacancies = vacancies.map(el => el);
        newVacancies.forEach(v => {
            if (v.name === el.name) {
                v.active = true;
            } else {
                v.active = false;
            }
        })
        setVacancies(newVacancies);
    }

    return (
        <div className='workSection mainCol'>
            <Head name={name} setPage={setPage}/>
            <div className='EmployersTesting'>
                <div className="vacancies">
                    {vacancies.map(el =>
                        <div className="item" onClick={() => setActiveVacancy(el)}>
                            {el.name}
                        </div>
                    )}
                </div>
                <div className="vertBorder"></div>
                <div className="candidates">
                    {candidates.map(el =>
                        <div className="item">
                            {el.name}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EmployersTesting;