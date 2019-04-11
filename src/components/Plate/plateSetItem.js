import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPlatesSetItem,fetchPlatesSetList} from '../../actions/index';
import ProductItem from '../productItem';

class PlateSetItem extends Component{
  componentDidMount(){
    this.props.fetchPlatesSetItem(this.props.match.params.id);
  };
  
  render(){

    return(
      <div> 
        <ProductItem product={this.props.platesset} Item1={this.props.platesset} />
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    platesset: state.plates[ownProps.match.params.id],
  }
};

export default connect(mapStateToProps,{fetchPlatesSetItem,fetchPlatesSetList})(PlateSetItem);