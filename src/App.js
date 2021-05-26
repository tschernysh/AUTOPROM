import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom'
import Main from "./components/Main/Main";
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={s.container}>
        <Route path='/' render={() => <Main />} />
        <Route path='/about' render={() => <About />} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
