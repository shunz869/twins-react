import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMain} from '../../actions/index';
import MainProducts from './mainProducts';
import PreOrder from './preOrder';
import Carousel from './carousel';

class Main extends Component{
  componentDidMount(){
    this.props.fetchMain();
  }
  render(){
    const carousel=this.props.main[0]
    const mainProducts=this.props.main[1]
    const preOrder = this.props.main[3]
    return(
      <React.Fragment>
        <div className="row">
          <Carousel carousel={carousel}/>
       </div>
       <div className="row">
        <MainProducts products={mainProducts}/>
       </div>
       <div className="row">
        <div className="col-12 col-md-3 cik-lg-3">
          <PreOrder products={preOrder}/>
        </div> 
        <div className="col-12 col-md-9 col-lg-9">
        1
        </div>
      </div>
      </React.Fragment>
    );
  };
};


const mapStateToProps =(state) => {
  return {main:Object.values(state.main),};
};
export default connect(mapStateToProps,{fetchMain})(Main);
