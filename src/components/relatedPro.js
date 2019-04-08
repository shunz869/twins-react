import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/index';
import {Link} from 'react-router-dom';

class RelatedPro extends Component{
  componentDidMount(){
    this.props.fetchProducts();
  }

  renderRelatedProduct(){};


  render(){
    const newArray = this.props.products.filter((product) => product.id !== this.props.product.id);
    var randomItem = newArray[Math.floor(Math.random()*newArray.length)];
    if (!randomItem) {
      return <div>Loading...</div>;
    }
    return(
      <div className="card" style={{marginBottom :30}}>
      <h5>Related product</h5>
      <Link to={`/${randomItem.cat}/${randomItem.id}`}>
        <img src={randomItem.imgurl} alt={randomItem.name} className="card-img-top"  />
      </Link> 
      <div className="card-body">
        <h5 className="card-title">{randomItem.price}</h5>
        <Link to={`/${randomItem.cat}/${randomItem.id}`} className="card-text">
          <p className="card-text">{randomItem.name}</p>
        </Link>  
      </div>
    </div>
    )
  };
}
const mapStateToProps =(state) => {
  return {products:Object.values(state.products),};
};
export default connect(mapStateToProps,{fetchProducts})(RelatedPro);