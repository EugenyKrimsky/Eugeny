import { useState } from 'react';
import './App.css';
import ChooseMode from './components/Pages/ChoseMode'
import Authorization from './components/Pages/Authorization'
import EmployersTesting from './components/Pages/EmployersTesting'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState('');
  const [name, setName] = useState('');

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
            <EmployersTesting name={name} />
          }
        </div>
      }

    </div>
  );
}

export default App;
