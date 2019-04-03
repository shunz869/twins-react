import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Header from './components/header';
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

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/" exact component={Main} />
            <Route path="/plate" exact component={MiddlePlates} />
            <Route path="/plate/middleplates" exact component={MiddlePlates} />
            <Route path="/plate/largeplates" exact component={LargePlates} />
            <Route path="/plate/polygonplates" exact component={PolygonPlates} />
            <Route path="/plate/platesset" exact component={PlatesSet} />
            <Route path="/bowel" exact component={BowelList} />
            <Route path="/others" exact component={Cups} />
            <Route path="/others/cups" exact component={Cups} />
            <Route path="/others/sausedish" exact component={SauseDish} />
            <Route path="/others/teapot" exact component={TeaPot} />
            <Route path="/knives" exact component={Knives} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/bowel/:id" exact component={BowelProduct} />
            <Footer />
          </div>
          
        </Router>
      </div>
    );
  }
}

export default App;
