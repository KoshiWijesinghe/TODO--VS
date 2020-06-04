import * as actions from "./actionTypes"; //or import { ADD, REMOVE } from './actionTypes'

//array to represent the store
//initial state - when we start the application , initially the store is undefined.
// therefore redux going to call the reducer and pass undefined as the value of the state
// this should be overcomed, so need to define an initial state
// initial state is an empty array of store, so the state is initialised to an empty array

let lastID = 0; //counter for ID

export default function reducer(state = [], action) {
  //pure function. make it exportable to the store
  if (action.type === actions.ADDTODO)
    //if an item is added
    return [
      ...state, //copy all the items in the current sate
      // add new item object having some properties
      {
        id: ++lastID, //everytime an item is incresed the counter id is incremented
        description: action.description, //description
        resolved: false,

        // here there need to have minimum amount of information to update the sytem
        //minimul information for adding an item will be  description(no need of ID or resloved property)
      },
    ];
  else if (action.type === action.REMOVETODO)
    // return a new array that contains items except the item of given ID
    return state.filter((item) => item.id !== action.id);

  //if action is neither of these, return the current state
  return state; //prevent from system to blow up
}
