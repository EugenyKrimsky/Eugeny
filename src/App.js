import { useState } from 'react';
import './App.css';
import ChooseMode from './components/Pages/ChoseMode'
import Authorization from './components/Pages/Authorization'
import EmployersTesting from './components/Pages/EmployersTesting'
import EmployersResults from './components/Pages/EmployersResults'
import WorkerTesting from './components/Pages/WorkerTesting'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState('');
  const [name, setName] = useState('');
  const [vacancies, setVacancies] = useState([
    {
      name: 'Вакансия 1', active: true, desc: 'ОПИСАНИЕ ВАКАНСИИ 1', questions: [{
        question: 'ВОПРОС 1',
        id: 0,
        active: true,
        answers: ['ОТВЕТ 1', 'ОТВЕТ 2', 'ОТВЕТ 3', 'ОТВЕТ 4',]
      },{
        question: 'ВОПРОС 2',
        id: 1,
        active: false,
        answers: ['ОТВЕТ 1', 'ОТВЕТ 2', 'ОТВЕТ 3', 'ОТВЕТ 4',]
      },{
        question: 'ВОПРОС 3',
        id: 2,
        active: false,
        answers: ['ОТВЕТ 1', 'ОТВЕТ 2', 'ОТВЕТ 3', 'ОТВЕТ 4',]
      }], candidates: [{
        name: 'Кандидат 1',
        active: false,
        answered: 1,
        email: 'candidate1@gmail.com'
      }, {
        name: 'Кандидат 2',
        active: false,
        answered: 9,
        email: 'candidate2@gmail.com'
      }, {
        name: 'Кандидат 3',
        active: false,
        answered: 9,
        email: 'candidate3@gmail.com'
      }]
    }, {
      name: 'Вакансия 2', active: false, desc: 'ОПИСАНИЕ ВАКАНСИИ 2', questions: [{
        question: 'ВОПРОС 1',
        id: 0,
        active: true,
        answers: ['ОТВЕТ 1', 'ОТВЕТ 2', 'ОТВЕТ 3', 'ОТВЕТ 4',]
      }], candidates: [{
        name: 'Кандидат 1',
        active: false,
        answered: 8,
        email: 'candidate1@gmail.com'
      }, {
        name: 'Кандидат 2',
        active: false,
        answered: 8,
        email: 'candidate2@gmail.com'
      }, {
        name: 'Кандидат 3',
        active: false,
        answered: 8,
        email: 'candidate3@gmail.com'
      }, {
        name: 'Кандидат 4',
        active: false,
        answered: 8,
        email: 'candidate4@gmail.com'
      }, {
        name: 'Кандидат 5',
        active: false,
        answered: 8,
        email: 'candidate5@gmail.com'
      }, {
        name: 'Кандидат 6',
        active: false,
        answered: 8,
        email: 'candidate2@gmail.com'
      }, {
        name: 'Кандидат 7',
        active: false,
        answered: 8,
        email: 'candidate7@gmail.com'
      }, {
        name: 'Кандидат 8',
        active: false,
        answered: 8,
        email: 'candidate8@gmail.com'
      }, {
        name: 'Кандидат 9',
        active: false,
        answered: 8,
        email: 'candidate9@gmail.com'
      }]
    }, {
      name: 'Вакансия 3', active: false, desc: 'ОПИСАНИЕ ВАКАНСИИ 3', questions: [{
        question: 'ВОПРОС 1',
        id: 0,
        active: true,
        answers: ['ОТВЕТ 1', 'ОТВЕТ 2', 'ОТВЕТ 3', 'ОТВЕТ 4',]
      }], candidates: [{
        name: 'Кандидат 1',
        active: false,
        answered: 7,
        email: 'candidate1@gmail.com'
      }]
    },
  ]);
  const [page, setPage] = useState('testing');

  return (
    <div className="App">
      {!isLoggedIn && !mode &&
        <ChooseMode chooseMode={setMode} />
      }
      {!isLoggedIn && mode &&
        <Authorization name={name} mode={mode} setName={setName} setIsLoggedIn={setIsLoggedIn} />
      }
      {isLoggedIn &&
        <div>
          {mode === 'employer' &&
            <div>
              {page === 'testing' &&
                <EmployersTesting name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
              }
              {page === 'results' &&
                <EmployersResults name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
              }
            </div>
          }
          {mode === 'worker' &&
            <div>
              {page === 'testing' &&
                <WorkerTesting name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
              }
            </div>
          }
        </div>
      }

    </div>
  );
}

export default App;
