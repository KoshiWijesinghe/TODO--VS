import { createStore } from "redux";
import reducer from "./reducer"; //export reducer object from reducer module
// if default export is not used to export the module
// import {reducer} from "./reducer";

//createStore is a higher order function (it takes function as an argument)
const store = createStore(reducer); //passing the function reference of reducer as an argument.Returns object

//export it to main application
export default store;
