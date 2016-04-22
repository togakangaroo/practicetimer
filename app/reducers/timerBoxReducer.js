import boardReducer from './boardReducer';

const timerBoxReducer = function(
  state = [{ id: 1, time: 10, title: 'shop' }, { id: 2, time: 5, title: 'work' }], action) {

    // copy the state array
    let stateCopyArr = state.slice(0);
    // search in the array, return the object w/ the id that belongs to the clicked element
    let foundObj = stateCopyArr.find((el) => el.id === action.id);
    // grab the index of the object to remove
    const foundIndex = stateCopyArr.indexOf(foundObj);
    // copy the array and remove the found element, and replace it with the new element
    switch (action.type) {
      case 'SET_TITLE':
      // grab the node
        const newText = action.text;
     // remove the old node
        console.log(foundObj.title);
      // create the new object e.g {id: 2, time: 3, title: newText }
      stateCopyArr[foundIndex].title = newText;
      return stateCopyArr;

      case 'ADD_TIMER':
            console.log('add!');
      return [...state, { id: 3, time: 10, title: 'shop' }];
      case 'INCREMENT':
        console.log('INCREMENT');
      case 'DECREMENT':
        console.log('DECREMENT');
      case 'REMOVE_TIMER':

        // now that you know where it is in the array, remove the old object
        stateCopyArr.splice(foundIndex, 1);
        return stateCopyArr;
      default:
      return state;
    }
  };

  module.exports = timerBoxReducer;
