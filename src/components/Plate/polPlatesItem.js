import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPolPlateItem,fetchPolPlateList} from '../../actions/index';
import ProductItem from '../productItem';

class PolPlatesItem extends Component{
  componentDidMount(){
    this.props.fetchPolPlateItem(this.props.match.params.id);
    this.props.fetchPolPlateList();
  };
  
  render(){
    let List1 = this.props.polplates.filter((polplate) => polplate.id !== this.props.polplate.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.polplate} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    polplate: state.polplates[ownProps.match.params.id],
    polplates:Object.values(state.polplates)
  }
};

export default connect(mapStateToProps,{fetchPolPlateItem,fetchPolPlateList})(PolPlatesItem);