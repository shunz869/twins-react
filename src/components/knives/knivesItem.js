import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchKnivesItem,fetchKnivesList} from '../../actions/index';
import ProductItem from '../productItem';

class KnivesItem extends Component{
  componentDidMount(){
    this.props.fetchKnivesItem(this.props.match.params.id);
    this.props.fetchKnivesList();
  };

  render(){
    let List1 = this.props.knives.filter((knive) => knive.id !== this.props.knive.id);
    let Item1 = List1[Math.floor(Math.random()*List1.length)];
    let List2 = List1.filter((product) => product.id !==Item1.id);
    let Item2 = List2[Math.floor(Math.random()*List2.length)];
    return(
      <div> 
        <ProductItem product={this.props.knive} Item1={Item1} Item2={Item2}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {
    knive: state.knives[ownProps.match.params.id],
    knives:Object.values(state.knives)
  }
};

export default connect(mapStateToProps,{fetchKnivesItem,fetchKnivesList})(KnivesItem);