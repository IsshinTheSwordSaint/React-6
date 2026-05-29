import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import Tooltip from './components/Tooltip.jsx';

import PageLayout from './components/PageLayout.jsx';
import Sidebar from './components/Sidebar.jsx';
import ContentArea from './components/ContentArea.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      zad3
      <div style={{ padding: '40px' }}>
        <Tooltip hint="Zapisz zmiany">
          <button>Zapisz</button>
        </Tooltip>
      </div>
      Zad4
      <PageLayout>
        <div className="layout">
          <Sidebar>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Artykuły</a>
                </li>
                <li>
                  <a href="#">Memy dnia</a>
                </li>
                <li>
                  <a href="#">Fabryka jaboli</a>
                </li>
              </ul>
            </nav>
          </Sidebar>

          <ContentArea>
            <article>
              <h1>Jak przetrwać poniedziałek w trybie sigma</h1>

              <p>Essownik poszedl wziac 5 dych z bankomatu</p>

              <p>
                Pzyszedl tung tung sahur i go zaczal bic swoja duza brazowa
                palka
              </p>

              <p>
                Nadlatuje bombardiro crocodilo i wszystkich wysadza w powietrze
              </p>
            </article>
          </ContentArea>
        </div>
      </PageLayout>
    </>
  );
}

export default App;
