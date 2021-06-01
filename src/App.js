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
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Catalog from "./components/Catalog/Catalog";
import Subcategory from "./components/Subcategory/Subcategory";

function App() {
  return (
    <div className="App">
      <Header />
      {/*<div className={s.container}>*/}
        <Route exact path='/' render={() => <Main />} />
        <Route path='/about' render={() => <About />} />
        <Route path='/services' render={() => <Services />} />
        <Route path='/forUser' render={() => <ForUser />}/>
        <Route path='/blog' render={() => <Blog />}/>
        <Route path='/product' render={() => <ProductCard />}/>
        <Route path='/ForUser' render={() => <ForUser />}/>
        <Route path='/blogItem' render={() => <BlogItem />}/>
        <Route path='/error404' render={() => <Error404 />}/>
        <Route path='/popups' render={() => <Popups />}/>
        <Route path='/cart' render={() => <ShoppingCart />}/>
        <Route path='/catalog' render={() => <Catalog />}/>
        <Route path='/subcategory' render={() => <Subcategory />}/>
      {/*</div>*/}
      <Footer />
    </div>
  );
}

export default App;
