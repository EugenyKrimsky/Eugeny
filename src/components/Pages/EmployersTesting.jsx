import React, { useState } from 'react';
import Head from './../UI/Head'

const EmployersTesting = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const candidates = vacancies.find(el => el.active).candidates;
    const setVacancies = props.setVacancies;

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
        <div>
            <Head />
            <div>
                <div className="vacancies">
                    {vacancies.map(el =>
                        <div className="item" onClick={() => setActiveVacancy(el)}>
                            {el.name}
                        </div>
                    )}
                </div>
                <div className="candidates">
                    {candidates.map(el =>
                        <div className="item">
                            {el.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EmployersTesting;