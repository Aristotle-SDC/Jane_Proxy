import React from 'react';

const SharePopup = props => {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        <button onClick={props.closePopup}>close popup</button>
      </div>
    </div>
  );
};

export default SharePopup;
