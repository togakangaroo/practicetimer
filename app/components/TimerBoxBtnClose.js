import React, { PropTypes } from 'react';

const TimerBoxBtnClose = ({ onTimerBoxBtnCloseClick }) => {
  return (
  <div className="topBarLeft">
    <div
      className="TimerBoxBtnClose"
      onClick={() => {
        console.log('close');
        onTimerBoxBtnCloseClick();
      } }>
      <i className="fa fa-minus-circle fa-2x"></i>

    </div>
  </div>


  );
};

export default TimerBoxBtnClose;
