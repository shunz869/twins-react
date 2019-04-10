import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchCupsList} from '../../actions/index';
import ProductList from '../productList';

class Cups extends Component {
  componentDidMount(){
    this.props.fetchCupsList();
  }
  render(){
    const {cups}=this.props
    if(!cups){
      return <div>Loading</div>
    }
    return(
      <div className="row">
      {cups.map((cup) => <ProductList key={cup.id} product={cup} />)}
      </div>
    );
  }
};

const mapStateToProps =(state) => {
  return {cups:Object.values(state.cups),};
};
export default connect(mapStateToProps,{fetchCupsList})(Cups);
