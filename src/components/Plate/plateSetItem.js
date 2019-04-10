import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPlatesSetItem} from '../../actions/index';
import ProductItem from '../productItem';

class PlateSetItem extends Component{
  componentDidMount(){
    this.props.fetchPlatesSetItem(this.props.match.params.id);
  };
  
  render(){
    console.log(this.props.platesset)
    if(!this.props.platesset){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.platesset}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {platesset: state.plates[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchPlatesSetItem})(PlateSetItem);