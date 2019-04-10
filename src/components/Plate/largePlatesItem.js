import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLargePlateItem} from '../../actions/index';
import ProductItem from '../productItem';

class LargePlatesItem extends Component{
  componentDidMount(){
    this.props.fetchLargePlateItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.largeitem){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.largeitem}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {largeitem: state.largeplates[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchLargePlateItem})(LargePlatesItem);