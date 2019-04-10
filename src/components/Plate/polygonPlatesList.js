import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPolPlateList} from '../../actions/index'
import ProductList from '../productList';

class PolygonPlates extends Component{
  componentDidMount(){
    this.props.fetchPolPlateList();
  }
  render(){
    const {polplates} = this.props;
    return(
      <div className="row">
        {polplates.map((polplate) => <ProductList key={polplate.id} product={polplate} />)}
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {polplates:Object.values(state.polplates),};
};
export default connect(mapStateToProps,{fetchPolPlateList})(PolygonPlates);