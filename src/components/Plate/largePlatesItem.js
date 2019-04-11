import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLargePlateItem,fetchLargePlateList} from '../../actions/index';
import ProductItem from '../productItem';

class LargePlatesItem extends Component{
  componentDidMount(){
    this.props.fetchLargePlateItem(this.props.match.params.id);
    this.props.fetchLargePlateList();
  };
  
  render(){
    let List1 = this.props.largeplates.filter((largeplate) => largeplate.id !== this.props.largeitem.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.largeitem} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    largeitem: state.largeplates[ownProps.match.params.id],
    largeplates:Object.values(state.largeplates)
  }
};

export default connect(mapStateToProps,{fetchLargePlateItem,fetchLargePlateList})(LargePlatesItem);