import { combineReducers } from "redux";
import SVReducer from "./userReducer";


const rootReducer = combineReducers({
    SVReducer,
});

export default rootReducer;