import React, { Component } from 'react';
import {Router, Route} from 'react-router-dom';
import history from './history';
import Header from './components/header.js';
import BowelList from './components/Bowel/bowelList';
import Main from './components/Main/main';
import BowelItem from './components/Bowel/bowelItem';
import Knives from './components/knives/knivesList';
import Contact from './components/contact';
import Footer from './components/footer';
import Others from './components/Others/others';
import Plates from './components/Plate/plates';
import PlateSetItem from './components/Plate/plateSetItem';
import KnivesItem from './components/knives/knivesItem';
import middlePlatesItem from './components/Plate/middlePlatesItem';
import LargePlatesItem from './components/Plate/largePlatesItem';
import PolPlatesItem from './components/Plate/polPlatesItem';
import CupItem from './components/Others/cupItem';
import SauseDishItem from './components/Others/sauseDishItem';
import TeaPotItem from './components/Others/teaPotItem';


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
              <Route path="/others" component={Others} />
              <Route exact path="/bowel"  component={BowelList} />
              <Route exact path="/knives"  component={Knives} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/bowel/:id"  component={BowelItem} />
              <Route path="/platesset/:id" component={PlateSetItem} />
              <Route path="/knives/:id" component={KnivesItem} />
              <Route path="/middleplate/:id" component={middlePlatesItem} />
              <Route path="/largeplate/:id" component={LargePlatesItem} />
              <Route path="/polygonplate/:id" component={PolPlatesItem} />
              <Route path="/cups/:id" component={CupItem} />
              <Route path="/sausedish/:id" component={SauseDishItem} />
              <Route path="/teapot/:id" component={TeaPotItem} />
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
