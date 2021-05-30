import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom'
import Main from "./components/Main/Main";
import About from './components/About/About';
import Services from "./components/Services/Services";
import ForUser from "./components/ForUser/ForUser";
import Blog from "./components/Blog/Blog";
import ProductCard from "./components/ProductCard/ProductCard";
import BlogItem from "./components/BlogItem/BlogItem";
import Error404 from "./components/Error404/Error404";
import Popups from "./components/Popups/Popups";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<div className={s.container}>*/}
        <Route exact path='/' render={() => <Main />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/Services' render={() => <Services />} />
        <Route path='/forUser' render={() => <ForUser />}/>
        <Route path='/blog' render={() => <Blog />}/>
        <Route path='/product' render={() => <ProductCard />}/>
        <Route path='/ForUser' render={() => <ForUser />}/>
        <Route path='/Blog' render={() => <Blog />}/>
        <Route path='/BlogItem' render={() => <BlogItem />}/>
        <Route path='/Error404' render={() => <Error404 />}/>
      <Route path='/Popups' render={() => <Popups />}/>
      {/*</div>*/}
      <Footer />
    </div>
  );
}

export default App;
