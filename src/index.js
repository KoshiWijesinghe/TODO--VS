import store from "./store";
import * as actions from "./actionTypes"; //or import { ADD, REMOVE } from './actionTypes'

// the UI components subscribe to the store,so they get notify when a state change store chnages
//function calls, everytime a state is changed
const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState()); //2nd argument - current state of the store
});

//pass an action
store.dispatch({
  type: actions.ADDTODO,
  description: "Todo one", //object with description property
});

unsubscribe();

store.dispatch({
  type: actions.REMOVETODO,
  id: 1,
});

console.log(store.getState());
