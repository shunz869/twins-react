import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMidPlateItem} from '../../actions/index';
import ProductItem from '../productItem';

class MiddlePlatesItem extends Component{
  componentDidMount(){
    this.props.fetchMidPlateItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.miditem){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.miditem}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {miditem: state.midplates[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchMidPlateItem})(MiddlePlatesItem);