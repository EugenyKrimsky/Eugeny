import { useEffect, useState } from 'react';
import Head from './components/UI/Head'
import Footer from './components//UI/Footer';
import './App.css';
import ChooseMode from './components/Pages/ChoseMode'
import WorkerResults from './components/Pages/WorkerResults'
import Authorization from './components/Pages/Authorization'
import EmployersTesting from './components/Pages/EmployersTesting'
import EmployersResults from './components/Pages/EmployersResults'
import WorkerTesting from './components/Pages/WorkerTesting'
import state from './State'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mode, setMode] = useState('');
    const [name, setName] = useState('');
    const [vacancies, setVacancies] = useState(state);
    const [page, setPage] = useState('testing');

    useEffect(() => {
        if (!isLoggedIn) {
            setMode('');
            setName('');
            setPage('testing');
        }
    }, [isLoggedIn])

    return (
        <div className="App">
            {!isLoggedIn && !mode &&
                <ChooseMode chooseMode={setMode} />
            }
            {!isLoggedIn && mode && page !== 'we' &&
                <Authorization setPage={setPage} name={name} mode={mode} setName={setName} setIsLoggedIn={setIsLoggedIn} />
            }
            {isLoggedIn && page !== 'we' &&
                <div>
                    {mode === 'employer' &&
                        <div>
                            {page === 'testing' &&
                                <EmployersTesting setIsLoggedIn={setIsLoggedIn} name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
                            }
                            {page === 'results' &&
                                <EmployersResults setIsLoggedIn={setIsLoggedIn} name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
                            }
                        </div>
                    }
                    {mode === 'worker' &&
                        <div>
                            {page === 'testing' &&
                                <WorkerTesting setIsLoggedIn={setIsLoggedIn} name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
                            }
                            {page === 'results' &&
                                <WorkerResults setIsLoggedIn={setIsLoggedIn} name={name} vacancies={vacancies} setVacancies={setVacancies} setPage={setPage} />
                            }
                        </div>
                    }
                </div>
            }
            {page === 'we' &&
                <div className='workSection mainCol we-wrap'>
                    <Head name={name} setPage={setPage} setIsLoggedIn={setIsLoggedIn} />
                    <div className='we'>
                        <div className='we-block'>
                            <div>РУКОВОДИТЕЛЬ:&nbsp;</div>
                            <div>ЗАБЕРЖИНСКИЙ БОРИСЛАВ ЭДУАРДОВИЧ</div>
                        </div>
                        <div className='we-block'>
                            <div>РАЗРАБОТЧИКИ:&nbsp;</div>
                            <div>
                                <div>БОКОВ АРТЕМ ЕВГЕНЬЕВИЧ</div>
                                <div>ЗАКУРДАЕВА ОЛЕСЯ АНДРЕЕВНА</div>
                                <div>КРУГЛОВ КИРИЛЛ ВЛАДИМИРОВИЧ</div>
                                <div>КРЫМСКИЙ ЕВГЕНИЙ ЮРЬЕВИЧ</div>
                                <div>ПЕРФИЛОВ ДАНИЛА ВАЛЕРЬЕВИЧ</div>
                                <div>ТРОФИМОВ АЛЕКСЕЙ ЕВГЕНЬЕВИЧ</div>
                                <div>ШТАНКОВ АЛЕКСЕЙ АЛЕКСЕЕВИЧ</div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }

        </div>
    );
}

export default App;
