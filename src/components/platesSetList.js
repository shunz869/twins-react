import React, { Component } from 'react';
import PlatesSidebar from './platesSideBar';
import {connect} from 'react-redux';
import {fetchPlates} from '../actions/index';
import ProductList from './productList';

class PlatesSet extends Component{
  componentDidMount(){
    this.props.fetchPlates();
  }
  render(){
    const {platessets} = this.props;

    return(
      <div className="row">
        <div className="col-md-3" style={{marginTop:50}}>
          <PlatesSidebar />
        </div>
        <div className="col-md-9" style={{marginTop:50}}>
          <div className="row">
            {platessets.map((plateset) => <ProductList key={plateset.id} product={plateset} />)}
          </div>
        </div>
      </div>
    );
  };
};
const mapStateToProps =(state) => {
  return {platessets:Object.values(state.plates),};
};
export default connect(mapStateToProps,{fetchPlates})(PlatesSet);

