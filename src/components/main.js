import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCarosel} from '../actions/index';

class Main extends Component{
  componentDidMount(){
    this.props.fetchCarosel();
  };

  render(){
    const {carosel} = this.props;

    return(
      <div className="row">
        <div className="col-12">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={carosel.url1} className="d-block w-100" alt="1"/>
              </div>
              <div className="carousel-item">
                <img src={carosel.url2} className="d-block w-100" alt="2"/>
              </div>
              <div className="carousel-item">
                <img src={carosel.url3} className="d-block w-100" alt="3"/>
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {carosel:state.carosel};
};

export default connect(mapStateToProps,{fetchCarosel})(Main);