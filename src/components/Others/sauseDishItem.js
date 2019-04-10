import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDishItem} from '../../actions/index';
import ProductItem from '../productItem';

class SauseDishItem extends Component{
  componentDidMount(){
    this.props.fetchDishItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.dishitem){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.dishitem}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {dishitem: state.dishes[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchDishItem})(SauseDishItem);