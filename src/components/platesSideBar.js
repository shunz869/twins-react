import React from 'react';
import {NavLink} from 'react-router-dom';

const PlatesSidebar = () => {
  return(
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
  );
};

export default PlatesSidebar;