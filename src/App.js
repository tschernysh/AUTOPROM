import logo from './logo.svg';
import s from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {Route, Switch} from 'react-router-dom'
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
import {ModalContext} from "./common/context/ModalContext";
import {useState} from "react";
import ModalWrapper from "./common/Modals/ModalWrapper";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false)
  const [modalContent, setModalContent] = useState(false)


    return (
        <ModalContext.Provider value={{modalVisibility, setModalVisibility, modalContent, setModalContent}}>
            <div className="App">
              {modalVisibility && <ModalWrapper setModalContent={setModalContent} setModalVisibility={setModalVisibility} modalContent={modalContent} modalVisibility={modalVisibility} />}
                <Header/>
                <Switch>
                    <Route exact path='/' render={() => <Main/>}/>
                    <Route path='/about' render={() => <About/>}/>
                    <Route path='/services' render={() => <Services/>}/>
                    <Route path='/forUser' render={() => <ForUser/>}/>
                    <Route path='/blog' render={() => <Blog/>}/>
                    <Route path='/product' render={() => <ProductCard/>}/>
                    <Route path='/forUser' render={() => <ForUser/>}/>
                    <Route path='/blogItem' render={() => <BlogItem/>}/>
                    <Route path='/error404' render={() => <Error404/>}/>
                    <Route path='/popups' render={() => <Popups/>}/>
                    <Route path='/cart' render={() => <ShoppingCart/>}/>
                    <Route path='/catalog' render={() => <Catalog/>}/>
                    <Route path='/subcategory' render={() => <Subcategory/>}/>
                    <Route path='*' exact render={() => <Error404/>}/>
                </Switch>
                <Footer/>
            </div>
        </ModalContext.Provider>
    );
}

export default App;
