import authReducer from "./authReducer";
import checkoutReducer from "./checkoutReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  checkout: checkoutReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
