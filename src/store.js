import rootReducer from "./reducers/index";
import { createStore } from "redux";

// providing the root reducer for redux to the react app
const store = createStore(rootReducer);

export default store;
