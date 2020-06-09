import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import benefitsReducer from "./reducers/benefitsReducer";
import membersReducer from "./reducers/membersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers({
    auth: authReducer,
    benefits: benefitsReducer,
    members: membersReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
