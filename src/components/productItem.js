import React, { Component } from 'react';
import RelatedPro from './relatedPro';

class ProductItem extends Component {
  renderCarosel(){
    const {product} = this.props;
    if(product.subimgurl){
      return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={product.subimgurl} className="d-block w-100" alt="1"/>
            </div>
            <div className="carousel-item">
              <img src={product.subimgurl1} className="d-block w-100" alt="2"/>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      );
    }else{
      return null;
    } 
  };

  renderDescription(){
    if(this.props.product.description&&this.props.product.description1){
      return(
        <div>
          <p className="h6">Description</p>
          <p className="lead">{this.props.product.description}</p>
          <p className="lead">{this.props.product.description1}</p>
        </div>
        ); 
    }else if(this.props.product.description){
      return (
        <div>
          <p className="h6">Description</p>
          <p className="lead">{this.props.product.description}</p>
        </div>
      );
    }else{
      return null;
    };
  };

  render(){
    const {product}=this.props;
    
    if (!product) {
      return <div>Loading...</div>;
    }

    return(
      <div className="row" style={{marginTop :30}}>
        <div className="col-md-8">
        {this.renderCarosel()}
        <p className="h5" style={{marginTop:20}}>{product.price}</p>
        <p className="h5" style={{marginTop:20,marginBottom:20}}>{product.name}</p>
        {this.renderDescription()}
        <p className="h6" style={{marginTop:20,marginBottom:20}}>Specification</p>
        <p className="lead">{product.specification}</p>
        {product.specification1 && <p className="lead">{product.specification1}</p>}
        {product.specification2 && <p className="lead">{product.specification2}</p>}
        {product.shipping &&
          <div>
            <p className="h6" style={{marginTop:20,marginBottom:20}}>Shipping</p>
            <p className="lead">{product.shipping}</p>
            </div>
        }
        {product.declaration &&
          <div>
            <p className="h6" style={{marginTop:20,marginBottom:20}}>Declaration</p>
            <p className="lead">{product.declaration}</p>
            </div>
        }
        </div>
        <div className="col-md-4">
          <RelatedPro product={product} />
        </div>
      </div>
    );
  }
};

export default ProductItem;
