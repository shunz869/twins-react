import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RelatedBowels extends Component{
  render(){
    const {Item1,Item2} =this.props
    if(!Item1){
      return <div>Loading</div>
    }
    const renderItem2= ()=>{
      if(Item2){
        return(
          <div className="card" style={{marginBottom :30, border: 0}}>
            <Link to={`/${Item2.cat}/${Item2.id}`}>
              <img src={Item2.imgurl} alt={Item2.name} className="card-img-top"  />
            </Link> 
            <div className="card-body" style={{paddingLeft:0}}>
              <h5 className="card-title">{Item2.price}</h5>
              <Link to={`/${Item2.cat}/${Item2.id}`} className="card-text">
                <p className="card-text">{Item2.name}</p>
              </Link>  
            </div>
          </div>
        );
      }
    };
    return(
      <React.Fragment>
        <h4>Related product</h4>
        <div className="card" style={{marginBottom :30,border: 0}}>
          <Link to={`/${Item1.cat}/${Item1.id}`}>
            <img src={Item1.imgurl} alt={Item1.name} className="card-img-top"  />
          </Link> 
          <div className="card-body" style={{paddingLeft:0}}>
            <h5 className="card-title">{Item1.price}</h5>
            <Link to={`/${Item1.cat}/${Item1.id}`} className="card-text">
              <p className="card-text">{Item1.name}</p>
            </Link>  
          </div>
        </div>
        {renderItem2()}
      </React.Fragment>

    )
  };
}

export default RelatedBowels;