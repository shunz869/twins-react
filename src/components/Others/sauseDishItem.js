import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDishItem,fetchDishList} from '../../actions/index';
import ProductItem from '../productItem';

class SauseDishItem extends Component{
  componentDidMount(){
    this.props.fetchDishItem(this.props.match.params.id);
    this.props.fetchDishList();
  };
  
  render(){
    let List1 = this.props.dishes.filter((dish) => dish.id !== this.props.dishitem.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.dishitem} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    dishitem: state.dishes[ownProps.match.params.id],
    dishes:Object.values(state.dishes)
  }
};

export default connect(mapStateToProps,{fetchDishItem,fetchDishList})(SauseDishItem);