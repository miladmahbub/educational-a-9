import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import './App.css';
import About from './components/About/About';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Notfound from './components/notfound/Notfound';
import Footer from './components/footer/Footer';
import MenuBar from './components/MenuBar/MenuBar';


function App() {
  
  return (
    <div className="App">
      <Router>
        
        <MenuBar></MenuBar>
        <Switch>
              <Route exact path='/home'>
                <Home></Home>
              </Route>
              <Route exact path ='/about'>
                <About></About>
              </Route>
              <Route exact path= '/services'>
                <Services></Services>
              </Route>
              <Route exact path ='/contact'>
                <Contact></Contact>
              </Route>
              <Route exact path ='*'>
                <Notfound></Notfound>
              </Route>
          </Switch>
             <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
