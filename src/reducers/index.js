import { combineReducers } from "redux";
import gameReducer from "./gameReducers";

// combining if there is more than one reducer
const rootReducer = combineReducers({ gameBoard: gameReducer });

export default rootReducer;
