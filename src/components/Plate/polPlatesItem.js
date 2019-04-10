import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPolPlateItem} from '../../actions/index';
import ProductItem from '../productItem';

class PolPlatesItem extends Component{
  componentDidMount(){
    this.props.fetchPolPlateItem(this.props.match.params.id);
  };
  
  render(){
    if(!this.props.polplate){
      return <div>Loading</div>
    }
    return(
      <div> 
        <ProductItem product={this.props.polplate}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {polplate: state.polplates[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchPolPlateItem})(PolPlatesItem);