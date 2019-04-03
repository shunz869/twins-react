import React from 'react';
import OtherSideBar from './otherSideBar';

const SauseDish = () => {
  return(
    <div className="row" >
      <div className="col-md-3" style={{marginTop:50}}>
        <OtherSideBar />
      </div>
      <div className="col-md-9" style={{marginTop:50}}>
        <div className="col-md-6">123</div>
        <div className="col-md-6">123</div>

      </div>
    </div>
  );
};

export default SauseDish