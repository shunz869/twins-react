import React from 'react';
import OtherSideBar from './otherSideBar';

const TeaPot = () => {
  return(
    <div className="row">
      <div className="col-md-3" style={{marginTop:50}}>
        <OtherSideBar />
      </div>
      <div className="col-md-9" style={{marginTop:50}}>
        <div className="row">
          <div className="col-md-6">123</div>
          <div className="col-md-6">123</div>
        </div>
      </div>
    </div>
  );
};

export default TeaPot