import React, { Component } from 'react';

class Carousel extends Component{

  render(){
    const {carousel}=this.props
    if(!carousel){
      return <div>Loading</div>
    }

    return(
      <div className="col-12">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carousel.url1} className="d-block w-100" alt="1"/>
            </div>
            <div className="carousel-item">
              <img src={carousel.url2} className="d-block w-100" alt="2"/>
            </div>
            <div className="carousel-item">
              <img src={carousel.url3} className="d-block w-100" alt="3"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next1</span>
          </a>
        </div>    
      </div>
    );
  }
}

export default Carousel;

