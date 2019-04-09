import React, { Component } from 'react';
import {Switch,Route,NavLink} from 'react-router-dom';
import SauseDish from './sauseDish';
import TeaPot from './teaPot';
import Cups from './cups';

class Others extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-3" style={{marginTop:50}}>
          <div className="nav flex-column nav-pills " >
            <NavLink 
              to="/others/cups" 
              className="nav-link" 
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Cups
            </NavLink>
            <NavLink 
              to="/others/sausedish" 
              className="nav-link" 
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Sause Dish
            </NavLink>
            <NavLink 
              to="/others/teapot" 
              className="nav-link" 
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Tea Pot
            </NavLink>
          </div>
        </div>
        <div className="col-md-9" style={{marginTop:50}}>
          <Switch>
            <Route path="/others/cups" exact component={Cups} />
            <Route path="/others/sausedish" exact component={SauseDish} />
            <Route path="/others/teapot" exact component={TeaPot} />
          </Switch>
        </div>
      </div>    
    );
  };
};

export default Others