import { useState } from 'react';
import './App.css';
import ChooseMode from './components/Pages/ChoseMode'
import Authorization from './components/Pages/Authorization'
import EmployersTesting from './components/Pages/EmployersTesting'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState('');
  const [name, setName] = useState('');
  const [vacancies, setVacancies] = useState([
    {
      name: 'Вакансия 1', active: false, candidates: [{
        name: 'Кандидат 1',
        questions: 10,
        answered: 9
      }]
    }, {
      name: 'Вакансия 2', active: true, candidates: [{
        name: 'Кандидат 2',
        questions: 10,
        answered: 8
      }]
    }, {
      name: 'Вакансия 3', active: false, candidates: [{
        name: 'Кандидат 3',
        questions: 10,
        answered: 7
      }]
    },
  ]);

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
            <EmployersTesting name={name} vacancies={vacancies} setVacancies={setVacancies}/>
          }
        </div>
      }

    </div>
  );
}

export default App;
