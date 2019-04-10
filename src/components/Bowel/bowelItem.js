import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBowelItem} from '../../actions/index';
import ProductItem from '../productItem';

class BowelItem extends Component{
  componentDidMount(){
    this.props.fetchBowelItem(this.props.match.params.id);
  };

  render(){
    return(
      <div> 
        <ProductItem product={this.props.product}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {product: state.bowels[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchBowelItem})(BowelItem);