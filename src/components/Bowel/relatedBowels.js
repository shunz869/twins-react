import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchBowelList} from '../../actions/index';
import {fetchPlatesSetList} from '../../actions/index';
import {Link} from 'react-router-dom';

class RelatedBowels extends Component{
  componentDidMount(){
    this.props.fetchBowelList();
    this.props.fetchPlatesSetList();
  }

  render(){
    const renderRelatedProducts=() => {
      let bowelList1 = this.props.products.filter((product) => product.id !== this.props.product.id);
      let bowelItem1 = bowelList1[Math.floor(Math.random()*bowelList1.length)];
      let bowelList2 = bowelList1.filter((product) => product.id !==bowelItem1.id);
      let bowelItem2 =bowelList2[Math.floor(Math.random()*bowelList2.length)];
      if(!bowelItem1){
        return <div>Loading</div>
      }
      if(bowelItem1.cat === this.props.product.cat){
        return(
          <React.Fragment>
            <div className="card" style={{marginBottom :30,border: 0}}>
              <Link to={`/${bowelItem1.cat}/${bowelItem1.id}`}>
                <img src={bowelItem1.imgurl} alt={bowelItem1.name} className="card-img-top"  />
              </Link> 
              <div className="card-body" style={{paddingLeft:0}}>
                <h5 className="card-title">{bowelItem1.price}</h5>
                <Link to={`/${bowelItem1.cat}/${bowelItem1.id}`} className="card-text">
                  <p className="card-text">{bowelItem1.name}</p>
                </Link>  
              </div>
            </div>
            <div className="card" style={{marginBottom :30, border: 0}}>
              <Link to={`/${bowelItem2.cat}/${bowelItem2.id}`}>
                <img src={bowelItem2.imgurl} alt={bowelItem2.name} className="card-img-top"  />
              </Link> 
              <div className="card-body" style={{paddingLeft:0}}>
                <h5 className="card-title">{bowelItem2.price}</h5>
                <Link to={`/${bowelItem2.cat}/${bowelItem2.id}`} className="card-text">
                  <p className="card-text">{bowelItem2.name}</p>
                </Link>  
              </div>
            </div>
          </React.Fragment>
        );
      }
    }
    return(
      <React.Fragment>
        <h4>Related product</h4>
        {renderRelatedProducts()}
      </React.Fragment>

    )
  };
}
const mapStateToProps =(state) => {
  return {
    products:Object.values(state.bowels),
    platesset:Object.values(state.plates)
  };
};
export default connect(mapStateToProps,{fetchBowelList,fetchPlatesSetList})(RelatedBowels);