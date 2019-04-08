import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductList2 extends Component{
  render(){
    const {product} = this.props;
    return(
      <div className="col-12 col-md-4 col-lg-4" key={product.id} style={{marginBottom :30}}>
        <div className="card" style={{border:0}}>
          <Link to={`/${product.cat}/${product.id}`}>
            <img src={product.imgurl} alt={product.name} className="card-img-top"  />
          </Link> 
          <div className="card-body" style={{paddingLeft:0}}>
            <h5 className="card-title" style={{color:'#81d8d0'}}>{product.price}</h5>
            <Link to={`/${product.cat}/${product.id}`} style={{ textDecoration: 'none' }} className="card-text">
              <p className="card-text" style={{color:'black',fontSize:18}} >{product.name}</p>
            </Link>  
          </div>
        </div>
      </div>
    );
  };
};

export default ProductList2