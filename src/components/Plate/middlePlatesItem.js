import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMidPlateItem,fetchMidPlateList} from '../../actions/index';
import ProductItem from '../productItem';

class MiddlePlatesItem extends Component{
  componentDidMount(){
    this.props.fetchMidPlateItem(this.props.match.params.id);
    this.props.fetchMidPlateList();
  };
  
  render(){
    let List1 = this.props.midplates.filter((midplate) => midplate.id !== this.props.miditem.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.miditem} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    miditem: state.midplates[ownProps.match.params.id],
    midplates:Object.values(state.midplates)
  }
};

export default connect(mapStateToProps,{fetchMidPlateItem,fetchMidPlateList})(MiddlePlatesItem);