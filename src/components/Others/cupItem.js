import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCupItem,fetchCupsList} from '../../actions/index';
import ProductItem from '../productItem';

class CupItem extends Component{
  componentDidMount(){
    this.props.fetchCupItem(this.props.match.params.id);
    this.props.fetchCupsList();
  };
  
  render(){
    let List1 = this.props.cups.filter((cup) => cup.id !== this.props.cupitem.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.cupitem} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    cupitem: state.cups[ownProps.match.params.id],
    cups:Object.values(state.cups)
  }
};

export default connect(mapStateToProps,{fetchCupItem,fetchCupsList})(CupItem);