import React from 'react';
import PlatesSidebar from './platesSideBar';

const MiddlePlates = () => {
  return(
    <div className="row">
      <div className="col-md-3" style={{marginTop:50}}>
        <PlatesSidebar />
      </div>
      <div className="col-md-9" style={{marginTop:50}}>
      main
      </div>
    </div>
  );
};

export default MiddlePlates