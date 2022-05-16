import React, { useState } from 'react';
import Head from './../UI/Head'
import Footer from './../UI/Footer'
import Input from './../UI/Input'

const EmployersTesting = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const activeVacancy = vacancies.find(el => el.active);
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;
    const setIsLoggedIn = props.setIsLoggedIn;

    let candidates = [];
    if (activeVacancy) {
        candidates = activeVacancy.candidates.map(el => ({
            ...el,
            active: el.active
        }));
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

    const openCandidateWorker = (id, e) => {
        e.stopPropagation();
        const newVacancies = vacancies.map(el => el);

        newVacancies.forEach(el => {
            if (el.active) {
                el.candidates.forEach((a, i) => {
                    if (i === id) {
                        a.active = true;
                    } else {
                        a.active = false;
                    }
                });
            }
        });
        setVacancies(newVacancies);

    }

    const calcQaulity = (answered, questions) => {
        if (answered / questions > 0.5) {
            return 'ПОДХОДИТ';
        } else {
            return 'НЕ ПОДХОДИТ';
        }
    }

    const closeMenu = (e) => {
        const newVacancies = vacancies.map(el => el);

        newVacancies.forEach(el => {
            if (el.active) {
                el.candidates.forEach((a, i) => {
                    a.active = false;
                });
            }
        });
        setVacancies(newVacancies);
    }

    return (
        <div className='workSection mainCol' onClick={closeMenu}>
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
                    {candidates.map((el, i) =>
                        <div className="item" onClick={(e) => openCandidateWorker(i, e)}>
                            {el.name}
                            {el.active &&
                                <div className='info'>
                                    <div className="info-item">{el.name}</div>
                                    <div className="info-item">{el.email}</div>
                                    <div className="questionBlock">
                                        <Input className="_noBorder" value={calcQaulity(el.answered, activeVacancy.questions.length)} />
                                        <div className="borderBlockGrey">
                                            <div className="circleGrey left"></div>
                                            <div className="borderGrey"></div>
                                            <div className="circleGrey right"></div>
                                        </div>
                                        <Input className="_noBorder" value={`${el.answered}/${activeVacancy.questions.length}`} />
                                    </div>
                                </div>
                            }
                        </div>
                    )}
                </div>
            </div>
            <Footer setPage={setPage}/>
        </div>
    );
};

export default EmployersTesting;