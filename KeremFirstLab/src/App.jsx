// src/App.jsx
import './App.css';
import icon1 from './assets/icon1.png';
import icon2 from './assets/icon2.png';
import icon3 from './assets/icon3.png';
import icon4 from './assets/icon4.png';
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';

function App() {
  return (
    <div className='App'>
      <div className='upperDiv'>
        <header>
          <div className='topbar'>
            <img src={logo} style={{ padding: 10 + 'px ' + 50 + 'px' }}></img>
            <img
              src={menu}
              style={{ alignSelf: 'flex-end', padding: 10 + 'px ' + 50 + 'px' }}
            ></img>
          </div>
        </header>
        <div style={{ padding: 50 + 'px' }}>
          <h1>Say Hello to ReactJs</h1>
          <p>
            You will learn how to use <br></br> the most populer frontend
            library, <br></br> and become a super ninja developer
          </p>
          <button>awesome</button>
        </div>
      </div>
      <div className='lowerDiv'>
        <div className='oneBlock'>
          <img src={icon1} alt='' />
          <h2>Declerative</h2>
          <a>react makes it painless to create interactive UIs</a>
        </div>
        <div className='oneBlock'>
          <img src={icon2} alt='' />
          <h2>Declerative</h2>
          <a>react makes it painless to create interactive UIs</a>
        </div>
        <div className='oneBlock'>
          <img src={icon3} alt='' />
          <h2>Declerative</h2>
          <a>react makes it painless to create interactive UIs</a>
        </div>
        <div className='oneBlock'>
          <img src={icon4} alt='' />
          <h2>Declerative</h2>
          <a>react makes it painless to create interactive UIs</a>
        </div>
      </div>
    </div>
  );
}

export default App;
