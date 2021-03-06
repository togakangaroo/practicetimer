
// given the state and the current id, grab the next id;
export const nextInLine = (state, currentId) => {
  const idArr = state.map((el) => el.id); // [1, 4, 6]
  const currentIndex = idArr.indexOf(currentId); // e.g. if 4 , then zero
  const nextId = idArr[currentIndex + 1];
  return nextId;
};

export const storeStateInLS = (obj) => {
  if (typeof obj === 'object' || 'array') {
    // convert to string bc stupid localstorage only supports plain string
    const objString = JSON.stringify(obj);
    localStorage.setItem('storedState', objString);
  }
};

export const getStateFromLS = () => {
  const string = localStorage.getItem('storedState');
  const stateObj = JSON.parse(string);
  return stateObj;
};

//
export const secondsToMinutesAndHours = (seconds) => {
  let displayString;
  let secondsAsInt = Math.round(seconds);
  if (secondsAsInt > 0) {
      // converts to minutes...
      let minutes = Math.floor(secondsAsInt / 60);
    // ...with remaning seconds (e.g 1:05)
    let remainingSecs = secondsAsInt - minutes * 60;
    // if remaining seconds is under 10, add a 0
    let secsWithLeadingZeros = (remainingSecs < 10) ? ('0' + remainingSecs) : remainingSecs;
    displayString = minutes + ':' + secsWithLeadingZeros;
  } 
  else if(secondsAsInt <= 0) {
    displayString = 'end';
  } 
  else { 
    displayString = secondsAsInt;
  }    
  return displayString;
};   

/*
export const getNextId = (stateArr = this.props.state.getState(), currentId = this.props.eachKey) => {
  const _getCurrentValueFromStateArr = () => {
    return stateArr.find((el) => el.id === currentId);
  };
  const _getNextIdFromCurrentValue = (currentValue) => {
    let index = stateArr.indexOf(currentValue);
    if (index >= 0 && index < stateArr.length - 1) {
      const nextItem = stateArr[index + 1];
      return nextItem.id;
    } else {
      return 0;
    }
  }
  return _getNextIdFromCurrentValue(_getCurrentValueFromStateArr());
};

- set ticking false
-  clear interval
- get nextID
*/
