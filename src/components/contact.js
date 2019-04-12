import React, { Component } from 'react';

class Contact extends Component{
  render(){
    return(
      <div className="row">
        <div className="col-12 col-md-8 col-lg-8" style={{marginTop:50}}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.4573363069508!2d151.0371233152098!3d-33.85210278066084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bcae9241ad95%3A0xf370fa8bdaa92bf7!2s2226%2F5+Percy+St%2C+Auburn+NSW+2144!5e0!3m2!1sen!2sau!4v1539176746500"></iframe>
          </div>
        </div>
        <div className="col-4 col-md-4 col-lg-4" style={{marginTop:50}}>
          <h5>Contact Us</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">info@twinsceramicstudio.com</li>
            <li className="list-group-item">@twinsceramic</li>
            <li className="list-group-item">Twin's Ceramic Studio</li>
            <li className="list-group-item">2226/5 Percy St, Auburn,NSW 2144</li>
          </ul>
        </div>
      </div>
      );
  };
};

export default Contact