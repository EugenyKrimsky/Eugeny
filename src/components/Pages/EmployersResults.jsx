import React, { useState } from 'react';
import Head from './../UI/Head'
import Footer from './../UI/Footer'
import Input from './../UI/Input'

const EmployersResults = props => {

    const name = props.name;
    const vacancies = props.vacancies;
    const setVacancies = props.setVacancies;
    const setPage = props.setPage;

    const [vacancyName, setVacancyName] = useState('');
    const [desc, setDesc] = useState('');
    const [answers, setAnswers] = useState([''])
    const [question, setQuestion] = useState('')
    const [questions, setQuestions] = useState([{
        question: 'ВОПРОС 1',
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
            question: `Вопрос ${maxIndex}`,
            answers: ['']
        };
        setQuestions([...questions, newQue]);
    }

    const addAns = (id) => {
        let quesCopy = questions.map(el => el);

        quesCopy.forEach((el, i) => {
            if (i === id) {
                el.answers= [...el.answers, ''];
            }
        });

        setQuestions(quesCopy);
    }

    return (
        <div className='workSection mainCol'>
            <Head name={name} setPage={setPage} />
            <div className="EmployersResults">
                <Input name='НАЗВАНИЕ ВАКАНСИИ' placeholder="НАЗВАНИЕ ВАКАНСИИ" value={vacancyName} setValue={setVacancyName} />
                <Input name='ОПИСАНИЕ ВАКАНСИИ' placeholder="ОПИСАНИЕ ВАКАНСИИ" value={desc} setValue={setDesc} />
                {questions.map((el, i) =>
                    <div className="questionBlock">
                        <Input className="_noBorder" name={`ВОПРОС ${i + 1}`} placeholder={`ВОПРОС ${i + 1}`} value={el.question} i={i} setValue={renameQue} />
                        <div className="borderBlock">
                            <div className="circle left"></div>
                            <div className="border"></div>
                            <div className="circle right"></div>
                        </div>
                        {el.answers.map((el, id) =>
                            <Input name={`ОТВЕТ ${id + 1}`} placeholder={`ОТВЕТ ${id + 1}`} value={el.question} i={id} parI={i} setValue={renameAns} />
                        )}
                        <div className="addAns" onClick={() => addAns(i)}>+ДОБАВИТЬ ОТВЕТ+</div>
                    </div>)}
                <div className="addQue" onClick={addQue}>+ДОБАВИТЬ ВОПРОС+</div>
            </div>
            <Footer />
        </div>
    );
};

export default EmployersResults;