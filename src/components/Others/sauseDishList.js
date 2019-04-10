import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchDishList} from '../../actions/index';
import ProductList from '../productList';

class SauseDish extends Component {
  componentDidMount(){
    this.props.fetchDishList();
  }
  render(){
    const {dishes}=this.props
    if(!dishes){
      return <div>Loading1</div>
    }
    return(
      <div className="row">
      {dishes.map((dish) => <ProductList key={dish.id} product={dish} />)}
      </div>
    );
  }
};

const mapStateToProps =(state) => {
  return {dishes:Object.values(state.dishes),};
};
export default connect(mapStateToProps,{fetchDishList})(SauseDish);
