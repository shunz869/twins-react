import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCupItem} from '../../actions/index';
import ProductItem from '../productItem';

class CupItem extends Component{
  componentDidMount(){
    this.props.fetchCupItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.cupitem){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.cupitem}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {cupitem: state.cups[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchCupItem})(CupItem);