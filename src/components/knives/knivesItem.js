import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchKnivesItem} from '../../actions/index';
import ProductItem from '../productItem';

class KnivesItem extends Component{
  componentDidMount(){
    this.props.fetchKnivesItem(this.props.match.params.id);
  };

  render(){
    return(
      <div> 
        <ProductItem product={this.props.knive}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {knive: state.knives[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchKnivesItem})(KnivesItem);