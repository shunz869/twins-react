import React, { Component } from 'react';
import {Switch,Route,NavLink} from 'react-router-dom';
import MiddlePlates from './middlePlates';
import LargePlates from './largePlates';
import PolygonPlates from './polygonPlates';
import PlatesSet from './platesSetList';

class Plates extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-md-3" style={{marginTop:50}}>
          <div className="nav flex-column nav-pills">
            <NavLink 
              to="/plate/middleplates" 
              className="nav-link"
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Middle Plates
            </NavLink>
            <NavLink 
              to="/plate/largeplates" 
              className="nav-link"
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Large Plates
            </NavLink>
            <NavLink 
              to="/plate/polygonplates" 
              className="nav-link"
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Polygon Plates
            </NavLink>
            <NavLink 
              to="/plate/platesset" 
              className="nav-link"
              style={{color:'black' }}
              activeStyle={{ backgroundColor:'#e1f2f0',color:'black' }}>
              Plates Set
            </NavLink>
          </div>
        </div>
        <div className="col-md-9" style={{marginTop:50}}>
          <Switch>
            <Route path="/plate/middleplates"  exact component={MiddlePlates} />
            <Route path="/plate/largeplates"  exact component={LargePlates} />
            <Route path="/plate/polygonplates"  exact component={PolygonPlates} />
            <Route path="/plate/platesset"  exact component={PlatesSet} />
          </Switch>
        </div>
      </div>
    );
  };
};

export default Plates;