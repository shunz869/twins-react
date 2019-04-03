import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchLogo} from '../actions/index';

class Header extends Component{
  componentDidMount(){
    this.props.fetchLogo();
  }
  render(){

    return(
      <div className="row">
          <div className="col-md-4" style={{marginBottom:5}}>
            <img src={this.props.logo.url} alt="logo" width="80" />
          </div>
          <div className="col-md-8" style={{textAlign:'right',marginBottom:5}} >this is the social media</div>
          <div className="col-12" >
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e1f2f0'}}  >
                <Link to="/" className="navbar-brand  h1" style={{marginTop:25,marginBottom:25}}>Twins Ceramic Studio</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                      <Link to="/plate" className="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Plates
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/plate/middleplates" className="dropdown-item" >Middle Plates</Link>
                        <Link to="/plate/largeplates" className="dropdown-item" >Large Plates</Link>
                        <Link to="/plate/polygonplates" className="dropdown-item" >Polygon Plates</Link>
                        <Link to="/plate/platesset" className="dropdown-item" >Plates Set</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to="/bowel" className="nav-link"> Bowls</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link to="/others" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Others
                      </Link>
                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to="/others/cups" className="dropdown-item">Cups</Link>
                        <Link to="/others/sausedish" className="dropdown-item">Sause Dish</Link>
                        <Link to="/others/teapot" className="dropdown-item">Tea Pot</Link>
                      </div>
                    </li>
                    <li className="nav-item">
                      <Link to="/knives" className="nav-link"> Knives and Forks</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/contact" className="nav-link"> Contact</Link>
                    </li>

                  </ul>
                </div>
 
            </nav>
          </div>
      </div>
    );
  }
};
const mapStateToProps =(state) => {
  return {logo:state.logo};
};
export default connect(mapStateToProps,{fetchLogo})(Header);