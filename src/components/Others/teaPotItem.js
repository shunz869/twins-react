import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPotItem} from '../../actions/index';
import ProductItem from '../productItem';

class TeaPotItem extends Component{
  componentDidMount(){
    this.props.fetchPotItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.teapotitem){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.teapotitem}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {teapotitem: state.teapots[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchPotItem})(TeaPotItem);