import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Header from './components/header.js';
import BowelList from './components/bowelList';
import Main from './components/main';
import BowelProduct from './components/bowelProduct';
import Knives from './components/knives';
import Contact from './components/contact';
import MiddlePlates from './components/middlePlates';
import LargePlates from './components/largePlates';
import PolygonPlates from './components/polygonPlates';
import PlatesSet from './components/platesSetList';
import Cups from './components/cups';
import SauseDish from './components/sauseDish';
import TeaPot from './components/teaPot';
import Footer from './components/footer';
import Others from './components/others';
import Plates from './components/plates';

class App extends Component {
  render(){
    return (
      <React.Fragment>
        <div className="container">
          <Router history={history}>
            <div>
              <Header />
              <Route path="/" exact component={Main} />
              <Route path="/plate"  component={Plates} />
              <Route path="/middleplates"  component={MiddlePlates} />
              <Route path="/largeplates"  component={LargePlates} />
              <Route path="/polygonplates"  component={PolygonPlates} />
              <Route path="/platesset"  component={PlatesSet} />
              <Route path="/bowel" exact component={BowelList} />
              <Route path="/others" component={Others} />
              <Route path="/cups" component={Cups} />
              <Route path="/sausedish" component={SauseDish} />
              <Route path="/teapot" component={TeaPot} />
              <Route path="/knives" exact component={Knives} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/bowel/:id" exact component={BowelProduct} />
            </div>
          </Router>
          
        </div>
        <hr/>
        <div className="container">
          <Footer />
        </div>
      </React.Fragment>

    );
  }
}

export default App;
