import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Textarea from './../UI/Textarea'
import Head from './../UI/Head';
import Footer from './../UI/Footer';
import Input from './../UI/Input';

const WorkerTesting = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const activeVacancy = vacancies.find(el => el.active);
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;
    let activeQue;
    if (activeVacancy) {
        activeQue = activeVacancy.questions.find(el => el.active);
    }

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

    const selectAns = id => {
        const newVacancies = vacancies.map(el => el);
        newVacancies.forEach(v => {
            if (v.name === activeVacancy.name) {
                v.questions.forEach((el, i, arr) => {
                    if (activeQue.id + 1 === el.id) {
                        el.active = true;
                    } else if (activeQue.id + 1 === arr.length) {
                        return;
                    } else {
                        el.active = false;
                    }
                });
            }
        });
        setVacancies(newVacancies);
    }


    return (
        <div className='workSection mainCol'>
            <Head name={name} setPage={setPage} />
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
                    {activeVacancy && activeQue &&
                        <div>
                            <Textarea className="desc" value={activeVacancy.desc} />
                            <div className="questionBlock">
                                <div>
                                    <Input className="_noBorder" name={`ВОПРОС ${activeQue.question}`} placeholder={`ВОПРОС ${activeQue.question}`} value={activeQue.question} />
                                    <div className="borderBlockGrey">
                                        <div className="circleGrey left"></div>
                                        <div className="borderGrey"></div>
                                        <div className="circleGrey right"></div>
                                    </div>
                                    <div className="_ph60">
                                        {activeQue.answers.map((el, id) =>
                                            <div className="buttonShadow  _mb15" onClick={() => selectAns(activeQue.name)}>{el}</div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </div>);
};

export default WorkerTesting;