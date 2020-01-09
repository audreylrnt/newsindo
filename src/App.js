import React from 'react';
import Nav from './components/nav';
import SearchPage from './components/searchPage';
import HomePage from './components/homePage';
import CategoryPage from './components/categoryPage';
import ContentPage from './components/contentPage';
import Login from './components/login';
import Register from './components/register';
import Footer from './components/footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <header>
                <Nav />
            </header>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/umum" render={()=><CategoryPage title="Umum" category="general" />}/>
            <Route path="/umum/page/:page_id" render={()=><ContentPage category="general" tag="Umum"/>}/>
            <Route exact path="/bisnis" render={()=><CategoryPage title="Bisnis" category="business"/>}/>
            <Route path="/bisnis/page/:page_id" render={()=><ContentPage category="business" tag="Bisnis"/>}/>
            <Route exact path="/hiburan" render={()=><CategoryPage title="Hiburan" category="entertainment"/>}/>
            <Route path="/hiburan/page/:page_id" render={()=><ContentPage category="entertainment" tag="Hiburan"/>}/>
            <Route exact path="/kesehatan" render={()=><CategoryPage title="Kesehatan" category="health"/>}/>
            <Route path="/kesehatan/page/:page_id" render={()=><ContentPage category="health" tag="Kesehatan"/>}/>
            <Route exact path="/sains" render={()=><CategoryPage title="Sains" category="science"/>}/>
            <Route path="/sains/page/:page_id" render={()=><ContentPage category="science" tag="Sains"/>}/>
            <Route exact path="/olahraga" render={()=><CategoryPage title="Olahraga" category="sports"/>}/>
            <Route path="/olahraga/page/:page_id" render={()=><ContentPage category="sports" tag="Olahraga"/>}/>
            <Route exact path="/teknologi" render={()=><CategoryPage title="Teknologi" category="technology"/>}/>
            <Route path="/teknologi/page/:page_id" render={()=><ContentPage category="technology" tag="Teknologi"/>}/>
            <Route exact path="/search/:q" component={SearchPage}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
            <footer>
                <Footer />
            </footer>
        </Router>
        
    );
}

export default App;