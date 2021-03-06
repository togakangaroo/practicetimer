import React, { PropTypes } from 'react';

const TimerBoxBtnReset = ({  onTimerBoxBtnResetClick }) => {
  return (
    <div
      className="btn TimerBoxBtnReset"
      onClick={() => {
        console.log('onTimerBoxBtnResetClick');
        onTimerBoxBtnResetClick();
      } }>
      <i className="fa fa-refresh fa-2x"></i>
    </div>

  );
};

export default TimerBoxBtnReset;
