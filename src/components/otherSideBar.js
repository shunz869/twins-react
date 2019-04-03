import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class OtherSideBar extends Component{

  render(){
    return(
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
    );
  };
};

export default OtherSideBar;