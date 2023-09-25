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
      <img src={logo}></img>
      <img src={menu}></img>
    </div>
  );
}

export default App;
