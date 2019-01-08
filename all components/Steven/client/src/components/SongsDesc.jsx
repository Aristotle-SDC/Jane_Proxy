import React from 'react';

const SongsDesc = props => {
  return (
    <div className="desc-artist-container">
      <div className="desc-flex">
        <div className="desc">{props.desc}</div>
      </div>
    </div>
  );
};

export default SongsDesc;
