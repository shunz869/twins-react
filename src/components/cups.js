import React from 'react';
import OtherSideBar from './otherSideBar';

const Cups = () => {
  return(
    <div className="row">
      <div className="col-md-3" style={{marginTop:50}}>
        <OtherSideBar />
      </div>
      <div className="col-md-9" style={{marginTop:50}}>
        main
      </div>
    </div>
  );
};

export default Cups