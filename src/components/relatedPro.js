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
    let randomItem = newArray[Math.floor(Math.random()*newArray.length)];
    const newArray2 = newArray.filter((product) => product.id !==randomItem.id);
    let randomItem2 =newArray2[Math.floor(Math.random()*newArray2.length)];
    if (!randomItem) {
      return <div>Loading...</div>;
    }
    if(!randomItem2){
      return <div>Loading</div>
    }
    return(
      <React.Fragment>
        <h4>Related product</h4>
        <div className="card" style={{marginBottom :30,border: 0}}>
          <Link to={`/${randomItem.cat}/${randomItem.id}`}>
            <img src={randomItem.imgurl} alt={randomItem.name} className="card-img-top"  />
          </Link> 
          <div className="card-body" style={{paddingLeft:0}}>
            <h5 className="card-title">{randomItem.price}</h5>
            <Link to={`/${randomItem.cat}/${randomItem.id}`} className="card-text">
              <p className="card-text">{randomItem.name}</p>
            </Link>  
          </div>
        </div>
        <div className="card" style={{marginBottom :30, border: 0}}>
          <Link to={`/${randomItem2.cat}/${randomItem2.id}`}>
            <img src={randomItem2.imgurl} alt={randomItem2.name} className="card-img-top"  />
          </Link> 
          <div className="card-body" style={{paddingLeft:0}}>
            <h5 className="card-title">{randomItem2.price}</h5>
            <Link to={`/${randomItem2.cat}/${randomItem2.id}`} className="card-text">
              <p className="card-text">{randomItem2.name}</p>
            </Link>  
          </div>
        </div>
      </React.Fragment>

    )
  };
}
const mapStateToProps =(state) => {
  return {products:Object.values(state.products),};
};
export default connect(mapStateToProps,{fetchProducts})(RelatedPro);