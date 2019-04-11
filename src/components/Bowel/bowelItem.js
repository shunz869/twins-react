import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBowelItem,fetchBowelList} from '../../actions/index';
import ProductItem from '../productItem';

class BowelItem extends Component{
  componentDidMount(){
    this.props.fetchBowelItem(this.props.match.params.id);
    this.props.fetchBowelList();
  };

  render(){
    let List1 = this.props.products.filter((product) => product.id !== this.props.product.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.product} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    product: state.bowels[ownProps.match.params.id],
    products:Object.values(state.bowels)
  }
};

export default connect(mapStateToProps,{fetchBowelItem,fetchBowelList})(BowelItem);