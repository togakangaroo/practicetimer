import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TimerBox from './TimerBox';
import BoardCountDownTotal from '../components/BoardCountDownTotal';
import BoardBtnAdd from '../components/BoardBtnAdd';
import BoardBtnControls from '../components/BoardBtnControls';
import * as actionCreators from '../actions/_actionCreators';



// remove dispatch wrapper: store.dispatch({ this.props.action.removeTimer }) -> this.props.action.removeTimer...

/* all this board does is increment the timer */
const Board = React.createClass({
  render() {
    return(
      <div className="board">
        <BoardCountDownTotal />
        <BoardBtnControls
          onBoardBtnPlayClick={ () => { this.props.actions.startTicking(1); } }
          onBoardBtnPauseClick={ () => { this.props.actions.pauseTimer(1); } }
        />
      {
        this.props.state.map((el) => {
          return (
            <TimerBox
              eachKey={ el.id }
              eachTime={ el.time }
              eachTitle={ el.title }
              eachTicking={ el.ticking }
              />
          );
        })
      }

      <BoardBtnAdd
        onBoardBtnAddClick={ () => {
           /* dont need dispatch function anymore bc of mapDispatchToProps, mapStateToProps */
           this.props.actions.addTimer(this.props.state);
        }  }
        />
        </div>
      );
    },
  });


  const mapStateToProps = (state) => ({ state });
  const mapDispatchToProps = (dispatch) => {
    return { actions: bindActionCreators(actionCreators, dispatch) }
  };
 export default connect(mapStateToProps, mapDispatchToProps)(Board);
  /* drum roll */
