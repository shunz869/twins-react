import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductList extends Component{
  render(){
    const {product} = this.props;
    return(
      <div className="col-12 col-md-6 col-lg-6" key={product.id} style={{marginBottom :30}}>
        <div className="card" style={{border:0}}>
          <Link to={`/${product.cat}/${product.id}`}>
            <img src={product.imgurl} alt={product.name} className="card-img-top"  />
          </Link> 
          <div className="card-body" style={{paddingLeft:0}}>
            <h5 className="card-title">{product.price}</h5>
            <Link to={`/${product.cat}/${product.id}`} className="card-text">
              <p className="card-text">{product.name}</p>
            </Link>  
          </div>
        </div>
      </div>
    );
  };
};

export default ProductList