import { combineReducers } from "redux";
import gameReducer from "./gameReducers";

const rootReducer = combineReducers({ gameBoard: gameReducer });

export default rootReducer;
