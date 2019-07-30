import {combineReducers} from "redux";
import {authReducer} from "./auth/reducers";
import {registrationReducer} from "./registration/reducers";
import {personReducer} from "./person/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    person: personReducer
});