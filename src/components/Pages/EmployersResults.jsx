import React, { useState } from 'react';
import Textarea from './../UI/Textarea'
import Head from './../UI/Head'
import Footer from './../UI/Footer'
import Input from './../UI/Input'

const EmployersResults = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;
    const setIsLoggedIn = props.setIsLoggedIn;

    const [vacancyName, setVacancyName] = useState('');
    const [desc, setDesc] = useState('');
    const [answers, setAnswers] = useState([''])
    const [question, setQuestion] = useState('')
    const [questions, setQuestions] = useState([{
        question: '',
        answers: [''],
    }]);

    const renameQue = (id, newQue) => {
        let quesCopy = questions.map(el => el);

        quesCopy.forEach((el, i) => {
            if (i === id) {
                el.question = newQue;
            }
        });

        setQuestions(quesCopy);
    }

    const renameAns = (parI, id, newAns) => {
        let quesCopy = questions.map(el => ({
            ...el,
            answers: el.answers.map(el => el)
        }));

        quesCopy.forEach((el, i) => {
            if (i === parI) {
                el.answers.forEach((a, index) => {
                    if (index === id) {
                        a = newAns;
                    }
                });
            }
        });

        setQuestions(quesCopy);
    }

    const addQue = () => {
        const maxIndex = questions.length;
        const newQue = {
            question: '',
            answers: ['']
        };
        setQuestions([...questions, newQue]);
    }

    const addAns = (id) => {
        let quesCopy = questions.map(el => el);

        quesCopy.forEach((el, i) => {
            if (i === id) {
                el.answers = [...el.answers, ''];
            }
        });

        setQuestions(quesCopy);
    }

    return (
        <div className='workSection mainCol'>
            <Head setIsLoggedIn={setIsLoggedIn} name={name} setPage={setPage} />
            <div className="EmployersResults">
                <Input name='???????????????? ????????????????' placeholder="???????????????? ????????????????" value={vacancyName} setValue={setVacancyName} />
                <Textarea name='???????????????? ????????????????' placeholder="???????????????? ????????????????" value={desc} setValue={setDesc} />
                {questions.map((el, i) =>
                    <div className="questionBlock">
                        <Input className="_noBorder" name={`???????????? ${i + 1}`} placeholder={`???????????? ${i + 1}`} value={el.question} i={i} setValue={renameQue} />
                        <div className="borderBlockGrey">
                            <div className="circleGrey left"></div>
                            <div className="borderGrey"></div>
                            <div className="circleGrey right"></div>
                        </div>
                        <div className="_ph60">
                            {el.answers.map((el, id) =>
                                <Input name={`?????????? ${id + 1}`} placeholder={`?????????? ${id + 1}`} value={el.question} i={id} parI={i} setValue={renameAns} />
                            )}
                            <div className="buttonShadow" onClick={() => addAns(i)}>+ ???????????????? ?????????? +</div>
                        </div>
                    </div>)}
                <div className="buttonShadow" onClick={addQue}>+ ???????????????? ???????????? +</div>
            </div>
            <Footer setPage={setPage}/>
        </div>
    );
};

export default EmployersResults;